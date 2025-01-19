# ART Finder

Welcome to *ART Finder*, an Automated Research and Trigger Finder designed to streamline your advertising research process.

## Overview

ART Finder automates the collection and analysis of data from various platforms to identify user pain points and effective advertising strategies.

## Features

- *Comprehensive Data Collection:* Gathers information from multiple sources to provide a holistic view of the market.
- *Advanced Analysis:* Utilizes AI models to extract actionable insights tailored to your brand.
- *User-Friendly Dashboard:* Presents findings in an intuitive interface for easy interpretation.

## Getting Started

### User Input

![User_input](findart/src/Readme_images/User_input.png)

To begin, input your brand's title and guidelines.

*Example:*

- *Brand Topic:* EcoVerse - A Sustainable Lifestyle Brand
- *Brand Guidelines:* EcoVerse is a direct-to-consumer brand specializing in eco-friendly, sustainable products, ranging from reusable household items to biodegradable packaging solutions.

### Workflow Process

![langflow_workflow](findart\src\Readme_images\langflow_workflow.png)

1. *Data Input:* Enter your brand's title and guidelines into ART Finder.
2. *Data Analysis:* ART Finder processes the input using Langflow, which sends a detailed prompt to the Perplexity API.
3. *Structured Output:* The response is formatted into a structured JSON using Gemini's controlled generation feature.
4. *Dashboard Display:* The structured data is sent to the dashboard via an API call, where it is displayed for user interpretation.

## Technical Details

- *Langflow Integration:* Manages the workflow and interfaces with the Perplexity API for data analysis.
- *Perplexity API:* Processes detailed prompts to generate comprehensive insights.
- *Gemini:* Ensures consistent JSON output through controlled generation.
- *Dashboard:* Displays the structured data in an accessible format for users.

## References

- [Langflow Documentation](https://docs.langflow.org/)
- [Perplexity API Overview](https://www.perplexity.ai/)
- [Gemini Structured Output Guide](https://ai.google.dev/gemini-api/docs/structured-output)

For more information on generating structured JSON outputs with Gemini, refer to the [Gemini Structured Output Guide](https://ai.google.dev/gemini-api/docs/structured-output).

---

By following this guide, you can effectively utilize ART Finder to enhance your brand's advertising strategies through automated research and analysis.