# SwissBIAS.github.io
Website for the SwissBIAS network: Swiss BioImage Analysts's network

## Setup notes
2021-02-04, sfn

### First steps (hello world and README)
- Following instructions on https://pages.github.com/
- Editing files/repo locally and using a terminal as git client, do
  + git add --all
  + git commit -m "Initial commit"
  + git push -u origin main
- Editing files/repo locally and using the GitHub desktop git client (mac or win), do
  + click "commit to main"
  + click "push"
- Editing files on GitHub, do
  + click "Commit change" at bottom of change

### Next steps (Jekyll and themes)
- Read here https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site-with-jekyll
- Seems like it may be necessary to install Jekyll on local machine
- Because I already know it, and because it is the most popular [theme](https://github.com/topics/jekyll-theme), I start with [minimal-mistakes](https://github.com/mmistakes/minimal-mistakes)
  - Quick-start guide here: https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/
- The idea is that Jekyll is installed locally once and used to create the structure of hte site --- most edits are done directly in GitHub afterwards, requiring only a browswer

#### Installing Jekyll on Ubuntu
- I have previously done this on macOS, so that is definitely possible
- https://jekyllrb.com/docs/installation/ubuntu/
- In home-dir do
  - $ sudo sed -i '/cdrom/d' /etc/apt/sources.list
  - $ sudo apt-get install ruby-full build-essential zlib1g-dev
  - $ echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
  - $ echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
  - $ source ~/.bashrc
  - $ gem install jekyll bundler
  - $ jekyll --version
    + answer: $ jekyll 4.2.0
  - $ gem env
    + GEM PATHS tells me I run ruby 2.7.0 
  - $ ruby -v
    + answer: 2.7.0p0