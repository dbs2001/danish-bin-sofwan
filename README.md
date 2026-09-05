# Danish Bin Sofwan — Personal Portfolio

Personal engineering leadership portfolio for **Danish Bin Sofwan**, focused on data architecture, enterprise data platforms, cloud transformation, engineering leadership, and Data & AI modernization.

## Technology

- Hugo
- Academia Hugo theme (customized)
- GitHub Pages
- GitHub Actions

## Local development

This repository currently retains the upstream theme's setup model: the theme source is stored at the repository root and the site is under `exampleSite/`. The setup script converts it into a runnable Hugo project.

```bash
npm run project-setup
npm install
npm run dev
```

For a production build:

```bash
npm run build
```

> `npm run project-setup` restructures the working copy, so run it in a clean clone or development branch.

## Portfolio structure

The site is organized around:

- Executive positioning
- Experience
- Architecture case studies
- Engineering and technical expertise
- Writing on DataSaaz

Architecture case studies are deliberately generalized to avoid disclosing confidential employer or client information.

## Deployment

Pushes to `main` are built and deployed through the GitHub Pages workflow in `.github/workflows/main.yml`.
