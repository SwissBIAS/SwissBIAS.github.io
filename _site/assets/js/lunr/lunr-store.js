var store = [{
        "title": "Andrzej.rzepiela",
        "excerpt":"Andrzej works at ETH Zurich in IDA - the Image and Data Analysis group inside of ScopeM.   Currently focused on applying deep learning to denoising of single-particle cryoEM images.   Also responsible for much of the virtualisation of image processing in ScopeM.  ","categories": [],
        "tags": ["python","phaedra"],
        "url": "http://localhost:4000/members/andrzej.rzepiela/",
        "teaser": null
      },{
        "title": "Guillaume.witz",
        "excerpt":"Guillaume is a Python wizard!!!  Check NEUBIAS Academy if you don’t believe it!  ","categories": [],
        "tags": ["fiji","python"],
        "url": "http://localhost:4000/members/guillaume.witz/",
        "teaser": null
      },{
        "title": "Romain.guiet",
        "excerpt":"Romain works at EPFL in BIOP.  He is a biologist by training, but has worked with image analysis since ~2010.  ","categories": [],
        "tags": ["python","fiji","qupath"],
        "url": "http://localhost:4000/members/romain.guiet/",
        "teaser": null
      },{
        "title": "Sebastien.herbert",
        "excerpt":"Seb works at the Imaging Core Facility of the Biozentrum, University of Basel.   Trained as a Bio-physicists with experience in cell culture, microscopy and polymer physics, I’ve gradually focused on supporting researchers in image analysis for fluorescence microscopy.  ","categories": [],
        "tags": ["fiji","Python","MATLAB","Deep-Learning"],
        "url": "http://localhost:4000/members/sebastien.herbert/",
        "teaser": null
      },{
        "title": "Simon.noerrelykke",
        "excerpt":"Simon works at ETH Zurich.  He heads IDA - the Image and Data Analysis group inside of ScopeM.  ","categories": [],
        "tags": ["matlab","fiji"],
        "url": "http://localhost:4000/members/simon.noerrelykke/",
        "teaser": null
      },{
        "title": "Szymon.stoma",
        "excerpt":"Szymon works at ETH Zurich in IDA - the Image and Data Analysis group inside of ScopeM.   He is also a serial-entrepreneur - ask him about it!  ","categories": [],
        "tags": ["python","fiji"],
        "url": "http://localhost:4000/members/szymon.stoma/",
        "teaser": null
      },{
        "title": "Setting Up The Site",
        "excerpt":"Setup notes  Some notes from setting up the SwissBIAS website on GitHub, using Jekyll, from Ubuntu  First steps (hello world and README)     Following instructions on https://pages.github.com/   Editing files/repo locally and using a terminal as git client, do            $ git add --all       $ git commit -m \"Initial commit\"       $ git push -u origin main           Editing files/repo locally and using the GitHub desktop git client (mac or win), do            click “commit to main”       click “push”           Editing files on GitHub, do            click “Commit change” at bottom of change           Next steps (Jekyll and themes)     The idea is that Jekyll is installed locally once and used to create the structure of hte site — most edits are done directly in GitHub afterwards, requiring only a browswer   Read here https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site-with-jekyll   It appears to be necessary to install Jekyll on local machine   Installing Jekyll on Ubuntu     I have previously done this on macOS, so that is definitely possible and actually turns out to be easier   https://jekyllrb.com/docs/installation/ubuntu/   In home-dir do            $ sudo sed -i ‘/cdrom/d’ /etc/apt/sources.list       $ sudo apt-get install ruby-full build-essential zlib1g-dev       $ echo ‘# Install Ruby Gems to ~/gems’ » ~/.bashrc       $ echo ‘export PATH=”$HOME/gems/bin:$PATH”’ » ~/.bashrc       $ source ~/.bashrc       $ gem install jekyll bundler       $ jekyll –version                    answer: $ jekyll 4.2.0                       $ gem env                    GEM PATHS tells me I run ruby 2.7.0                       $ ruby -v                    answer: 2.7.0p0                       $ gem install jekyll bundler           In ~/Github/SwissBIAS.github.io/ do (has to happen in folder of the project)            create file “Gemfile” and add this (more will be added later on)                    source “https://rubygems.org”           gem “jekyll”                       $ gem install bundler       $ bundle install       $ bundle exec jekyll serve                    then navigate to http://127.0.0.1:4000/ (http://localhost:4000/) to see local version of site           Looks slightly different from on GitHub, because GitHub has some default theme running           Automatically creates the folder /_site/ containing “index.html” generated from “index.md”, etc                       create folder /_layouts/ and populate with layout templates       create folder /_members/ and populate with one file per member, e.g. “simon.noerrelykke.md”, “romain.guit.md” etc - one markdown file for each member       etc, basically following this tutorial: https://jekyllrb.com/docs/step-by-step/01-setup/           Theme (if bare-bones is too bland)     Because I already know it, and because it is the most popular theme, I start with minimal-mistakes            Quick-start guide here: https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/           Modified Gem and _config.yml according to “Remote theme method” and ran command “bundle”   Added remote_theme: “mmistakes/minimal-mistakes@4.21.0” to _config.yml  ","categories": ["technotes"],
        "tags": ["Jekyll","GitHub","Ubuntu","website"],
        "url": "http://localhost:4000/technotes/setting-up-the-site/",
        "teaser": null
      }]
