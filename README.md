# Tailwind PurgeCSS Issue with Dynamically Added Classes

This repository demonstrates a common issue when using Tailwind CSS with frameworks like Next.js or Nuxt.js that involve dynamically rendered content.  The problem is that Tailwind's PurgeCSS might remove classes that are only added to the DOM after the initial render, resulting in missing styles.

## Setup

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.

## The Bug

The `dynamic-bug.js` file shows how a button adds a new div element with Tailwind classes. These classes are added after the initial page render and may be purged, leading to the new div lacking styling.

## Solution

The `dynamic-solution.js` file provides a solution using one of the common approaches to fix this issue.  It includes different methods to handle this problem, such as whitelisting important classes, configuring PurgeCSS, or using a different approach for dynamic styling.

This example shows a practical approach to solve a common issue encountered with Tailwind CSS and dynamic content.  Consider adapting the solution to your specific needs and application architecture.