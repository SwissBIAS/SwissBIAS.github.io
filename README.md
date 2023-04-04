# SwissBIAS.github.io
Website for the SwissBIAS network: Swiss BioImage Analysts' network
See also the associated [wiki](https://github.com/SwissBIAS/SwissBIAS.github.io/wiki)

## How to contribute
We decided to keep some control over what’s published by merging Pull Requests. So ***please fork, modify, PR*** and then we’ll merge your changes. Please see this [guide to create a Pull Request](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request). \
If you would prefer to generate a dummy website to make sure it looks exactly as you want before pushing it, you can create your locally served website. To do so, follow the instructions provided for the _imagej.github.io_ pages about [Jekyll and Git](https://github.com/imagej/imagej.github.io/blob/main/_pages/editing/advanced.md).

## Quickstart: Adding and editing member information
Each member have their own markdown file, stored in the `/_members` directory.
It consists of a YAML [frontmatter](https://jekyllrb.com/docs/front-matter/) (between the triple-dashed lines) and document body written in Github flavored [markdown](https://guides.github.com/features/mastering-markdown/). Bellow is an example, for the file `simon.noerrelykke.md`:

```markdown
---
first_name: Simon F.
last_name: Noerrelykke
short_name: simon
city: Zurich
affiliation: ETH Zurich
position: Image Analyst
tags: [matlab, fiji]
---

Simon works at ETH Zurich.\\
He heads [IDA](http://let-your-data-speak.com/) - the Image and Data Analysis group inside of ScopeM.
```

To create a new member file, copy an existing file, rename as `firstName.lastName.md`, change all text that needs changing, and save it in `/_members` (commit it).

> Front Matter conventions:
> * The `city` attribute should only be used for Swiss cities and left empty otherwise. To add a new city not yet present on [the map](https://swissbias.github.io/members/), check out [detailed documentation](https://github.com/SwissBIAS/SwissBIAS.github.io/wiki/How-to-add-yourself-to-the-webpage#the-city-attribute)
> * The `affiliation` attribute can hold only one institution/company. Use its main name and put the detailed description in the document body.

**Small edits** can be done directly in your browser in GitHub.   
**Larger changes** to structure must be done locally, then pushed to GitHub (see the [above section](#how-to-contribute). 

That is it!
The new member will automatically be added to the list of all members and have their own page with the text they provided, e.g. `https://www.swissbias.ch/members/simon.noerrelykke`.

## Adding pages
To add a webpage, create it as markdown or html and place it in `_pages` (become and editor or create a pull request for this).
You can link to it from another page or add it to the navigation menu (be conservative -- navigation bars quickly become crowded).

## Navigation bars
There are several possible navigation bars, read the documentation for whatever Jekyll theme we are using, e.g. [minimal-mistakes](https://github.com/mmistakes/minimal-mistakes).
Pages are added to the top bar by editing the file `navigation.yml` in the `/_data` folder.

# The configuration file
Most configuration takes place in the `_config.yml` file at root level.
Be careful if editing this!

# Layouts
Instead of specifying and formatting the looks of each individual page, templates are applied:
In the `/_layouts` folder, many are available, often inheriting features from each other, and you can add more if you want.
The layout applied to a given file/page is either specified in the YAML frontmatter or applies to all files in a given folder as specified in the configuration file `_config.yml`.
For example, all files in the folders `/_pages` and `/_members` have the `single` layout applied to them.
