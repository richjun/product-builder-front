# Blueprint: Lotto Number Generator

## Overview

A simple, user-friendly web application to generate random lottery numbers. The application allows users to generate multiple sets of numbers, copy them to the clipboard, and switch between light and dark themes for comfortable viewing.

## Implemented Features & Design

*   **Core Functionality:** Generates sets of 6 unique numbers within a specified range (1-45).
*   **Multiple Sets:** Users can generate multiple game sets at once.
*   **Copy to Clipboard:** A button to easily copy the generated numbers.
*   **Theme Switcher:** A toggle for switching between a light mode and a dark mode. The UI transitions smoothly between themes.
*   **Basic Layout:** A centered container on the page holds all the UI elements.

## Current Request: UI/UX Revamp

The user wants to make the application more colorful and visually appealing, and ensure the layout is mobile-friendly, especially on iPhones where the 6 numbers should not wrap to a new line.

### Plan

1.  **Update `style.css` for a Modern Look:**
    *   Introduce a new, more vibrant color palette using CSS variables. The new design will have a "bold" feel with gradients, expressive typography, and soft, multi-layered drop shadows for depth.
    *   Add a subtle noise texture to the background for a premium, tactile feel.
    *   Redesign the lotto number "balls" to be circular, with centered text and a 3D "lifted" look using `box-shadow`.
    *   Improve the styling of buttons and other interactive elements with "glow" effects on hover/focus.
    *   Implement a responsive layout for the number balls using `display: flex` to ensure they stay in a single row on all screen sizes, including mobile devices.

2.  **Update `main.js` for Enhanced Color Generation:**
    *   Adjust the `getNumberColor` function to produce more vibrant and appealing colors for the lotto balls by increasing the saturation and lightness values in the HSL color generation.

3.  **Verify HTML Structure:**
    *   Ensure the HTML in `index.html` remains semantic and that no changes are needed to support the new styles. The current structure appears sufficient.
