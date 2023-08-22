---
layout: post.liquid
title: A Start
date: 2023-08-21
style: a-start.css
tags:
- post
- meta
---

I haven't been programming much lately. I used to start programming projects all the time. Finishing them, however, has always been hard for me. At some point, I always lose interest. Usually, it's because something new and shiny comes along and grabs my attention. Sometimes, the project I was working on loses its sheen on its own. This website is a programming project, so it follows that I may not "finish" it. Of course, being that this is a website with (hopefully) continuous content updates, "maintain" might be a better verb.

At any rate, I'll be content if I post this article and nothing else. It took me a while to get to this point mentally and emotionally, but I eventually figured it out: *It doesn't matter*. I always thought that each project I started *had* to be finished. I had to publish it for the world to witness. I had to have a fancy name and domain. It had to serve a purpose. Well, that last one still obtains, but its nature has changed. The purpose of this website is to bring me joy. I'll work on it as long I enjoy working on it.

With that said, I wanted to write a little bit about my thought process when making this website. I know there's not much to it, but there are some little ideas I wanted to highlight.

## Content first

My website's design is decidedly simple. The heading is just my name, a tagline, and a little switch that toggles dark mode. At the bottom is a brief description of who I am, a photo of me, and links to other websites with my presence.

The content is what matters, and so its title gets the biggest text. There's plenty of padding between it and the sections above and below so that everything is separated and easy to tell apart. The date and tags are visible but more faint so they don't intrude.

## Modernity

<div class="floating-technology"><img src="/images/technology.png" /></div>

Static HTML websites are old news. Static site generators, however, seem to be increasingly popular, at least since I started using the internet. This website uses [11ty](https://www.11ty.dev) to take Markdown files and turn them into posts.

There's a lot of HTML, CSS, and JavaScript involved too. I never was an expert in web development, but I was always a stickler for "correct" code. For this website, though, I'm just having fun and discovering all the new things modern web browsers are capable of. As long as the majority can access and view my website, it doesn't really matter how I achieve it.

## Delight

I want the user to enjoy browsing my website. While the design is simple, I plan to include a lot of little things that delight. I use emojis as icons because they're fun and easy to recognize. (For some reason, that sentence has some serious "fellow kids" vibes.) The dark mode switch is animated. My profile picture at the bottom balloons up when you hover over it. Links in the dark theme have a subtle green glow when you hover over them, reminding you of glow-in-the-dark toys.

<div class="force-dark">

## De-light

Everyone uses dark mode nowadays, so it's a no-brainer to include it. One of my primary design principles is being kind to the user. I want the user to be comfortable when using my website, so I try to respect the user's preferences and set dark mode automatically depending on their system setting. There's also the little switch in the top-right corner so they can toggle dark mode manually. The website stores a cookie to remember the user's setting.

As of writing, my website is light-colored by default. When it detects that the user wants dark mode, there's a brief flash of light before it switches to dark mode. I can't figure out how to stop it from flashing, so as a stop-gap measure, I intend to set it to dark mode by default.

</div>
