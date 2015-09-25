# Visual regression testing

Visual regression testing consists of:

 + taking screenshots of criticals DOM elements, at certains
breakpoints (mediaQuery)

 + If there’s no reference screenshots, set the screenshots
 just taken as references.

 + If there’s reference screenshots, set the screenshots
 just taken as diff. Then compare them with the references screenshots, 
 check if there’s no difference.

Why regression testing?
---

```

Perils of responsive development

As we enter this era of building for multi-device usability it’s important to mitigate the common pitfalls of responsive development, which, among others, include:

    The responsive multiplier effect If you are one who thought css was quirky before, then you may want to sit down for this: Retrofitting your site with new responsive breakpoints will multiply that mystery by 2, or 3 or more – especially if you are not able to use a battle-tested framework like Bootstrap or foundation etc...

    Sleeping dragons Even if you have the luxury of starting your css project from scratch, when developing your css, mistakes often happen in breakpoints you can’t see. For example, when tweaking a mobile view, the desktop view may get a regression – and because visual testing requires physically manipulating the size and and scroll position of the browser viewport, it’s just not possible for a developer to catch everything.

    Death by a thousands bugs If you are not automating visual regression testing, A big refactor job can easily overwhelm a QA group with an unnecessarily high count of CSS bugs in a single sprint.

Responding to responsive development

The responsible thing to do given these exposures is to mitigate visual bugs through automated visual testing – that is in this case, to programmatically compare renderings of responsive content at different viewport sizes to ensure changes made at one screensize won’t break a layout at another screen size. Automating this process is key – because your computer never gets tired of comparing the same design over and over. This is critical to reducing bugs going to your QA process, or worse, to production.

```

[source](http://davidwalsh.name/visual-regression-testing-angular-applications)
