---
#title: This title is different from the file name
classes: wide
toc: true
excerpt: "Notes from setting up the site on GitHub, with Jekyll on Ubuntu"
category: technotes
tags: [Jekyll, GitHub, Ubuntu, website]
author: simon
---
# Setup notes
Some notes from setting up the SwissBIAS website on GitHub, using Jekyll, from Ubuntu
### First steps (hello world and README)
- Following instructions on https://pages.github.com/
- Editing files/repo locally and using a terminal as git client, do
  + `$ git add --all`
  + `$ git commit -m "Initial commit"`
  + `$ git push -u origin main`
- Editing files/repo locally and using the GitHub desktop git client (mac or win), do
  + click "commit to main"
  + click "push"
- Editing files on GitHub, do
  + click "Commit change" at bottom of change

### Next steps (Jekyll and themes)
- The idea is that Jekyll is installed locally once and used to create the structure of hte site --- most edits are done directly in GitHub afterwards, requiring only a browswer
- Read here https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site-with-jekyll
- It appears to be necessary to install Jekyll on local machine


### Installing Jekyll on Ubuntu
- I have previously done this on macOS, so that is definitely possible and actually turns out to be easier
- https://jekyllrb.com/docs/installation/ubuntu/
- In home-dir do
  - $ sudo sed -i '/cdrom/d' /etc/apt/sources.list
  - $ sudo apt-get install ruby-full build-essential zlib1g-dev
  - $ echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
  - $ echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
  - $ source ~/.bashrc
  - $ gem install jekyll bundler
  - $ jekyll --version
    + answer: `$ jekyll 4.2.0`
  - $ gem env
    + GEM PATHS tells me I run ruby 2.7.0 
  - $ ruby -v
    + answer: 2.7.0p0
  - $ gem install jekyll bundler
- In ~/Github/SwissBIAS.github.io/ do (has to happen in folder of the project)
  + create file "Gemfile" and add this (more will be added later on)
    * source "https://rubygems.org"
    * gem "jekyll"
  + $ gem install bundler
  + $ bundle install
  + $ bundle exec jekyll serve
    * then navigate to http://127.0.0.1:4000/ (http://localhost:4000/) to see local version of site
    * Looks slightly different from on GitHub, because GitHub has some default theme running
    * Automatically creates the folder /_site/ containing "index.html" generated from "index.md", etc
  + create folder /_layouts/ and populate with layout templates
  + create folder /_members/ and populate with one file per member, e.g. "simon.noerrelykke.md", "romain.guit.md" etc - one markdown file for each member
  + etc, basically following this tutorial: https://jekyllrb.com/docs/step-by-step/01-setup/
  

### Theme (if bare-bones is too bland)
- Because I already know it, and because it is the most popular [theme](https://github.com/topics/jekyll-theme), I start with [minimal-mistakes](https://github.com/mmistakes/minimal-mistakes)
  + Quick-start guide here: https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/
- Modified Gem and _config.yml according to "Remote theme method" and ran command "bundle"
- Added remote_theme: "mmistakes/minimal-mistakes@4.21.0" to _config.yml
