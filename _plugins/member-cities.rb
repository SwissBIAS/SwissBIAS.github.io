#!/usr/bin/ruby
#
# Script to generate `javascript_output_path` containing a JSON object with the cities, its longitude and latitude,
# and the affiliated institutions.
# This script need to be re-executed on the terminal of a local machine when member pages are added, edited or removed.
# (...because custom plugins do not work on github pages, and this would not function on the github servers
# as a proper jekyll plugin.)


require 'set'
require 'json'
require 'net/http'

Encoding.default_external = Encoding::UTF_8
Encoding.default_internal = Encoding::UTF_8


def get_front_matter_attributes(filepath, attributenames= %w[city affiliation])
  res = {}
  n = 0

  File.open(filepath, 'r:UFT-8').each_line { |line|
    if line.strip == '---'
        n +=  1
    else
      puts "read #{line}"
      parts = line.split(':')
      if parts
        attribute = attributenames.delete(parts[0].strip)
        if attribute
          res[attribute] = parts[1].strip
        end
      end
    end
    break unless (attributenames and n < 2)
  }
  puts "#{res}\n\n"
  res
end


def fetch_coordinates(city, base_url, query_options)
  query = URI(base_url + city + query_options)
  response = Net::HTTP.get(query)
  result = JSON.parse(response)[0]
  output = [result['lat'].to_f, result['lon'].to_f]
  puts "Fetched #{city}: [ #{output.join(" ")} + ]"
  output
end


def generate_location_json(pattern, url, options, outpath)
  ca = {}
  Dir.glob(pattern).each { |mdpath|
    puts "processing file #{mdpath}"
    fm = get_front_matter_attributes(mdpath)
    city = fm['city']
    city = "Unknown" if city.nil? || city.empty?

    if ca.has_key?(city)
      unless ca[city]['affiliations'].include?(fm['affiliation'])
        ca[city]['affiliations'].append(fm['affiliation'])
      end
    else
      if city == "Unknown"
        ca[city] = {'coordinates' => [], 'affiliations' => [fm['affiliation']]}
      else
        ca[city] = { 'coordinates' => fetch_coordinates(city, url, options),
                    'affiliations' => [fm['affiliation']] }
      end
    end
  }

  File.open(outpath, 'w+') {|f|
    f.write "// Generated with #{$PROGRAM_NAME}.\nfunction get_member_locations() {\nreturn " + JSON.pretty_generate(ca) + ";}"
  }
  puts "Wrote #{outpath}"
end


# MAIN
pages_path_pattern = '../_members/*.md'
javascript_output_path = "../assets/js/leaflet/member-locations.js"
coordinate_api_base_url = "https://nominatim.openstreetmap.org/search?q="
coordinate_api_options = ",+switzerland&format=json&limit=1"

generate_location_json(pages_path_pattern, coordinate_api_base_url, coordinate_api_options, javascript_output_path)
puts "Done."
