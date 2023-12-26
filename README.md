# Personal Blog - A Modern Fullstack Blog
Built with: [Next.js 14 App Router](https://nextjs.org/), TypeScript, [Sanity.io](https://www.sanity.io/), [next-sanity](https://www.npmjs.com/package/next-sanity), [TailwindCSS](https://tailwindcss.com/), and [Shadcn/ui](https://ui.shadcn.com/).
Production site: [biboblog.vercel.app](https://biboblog.vercel.app/)

## Development

### Clone the repository

```shell
git clone https://github.com/Bibo1604/blog.git
```

### Setup local environment file .env

```js
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=
NEXT_PUBLIC_SANITY_API_READ_TOKEN=
NEXT_PUBLIC_VERCEL_URL=
```

### Install packages

```shell
npm install # Install all packages required
```

### Start the app

```shell
npm run dev # Start the development server
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contribute
To contribute:

1. Select an issue from the [issue list](https://github.com/Bibo1604/blog/issues) and put on an **in progress** tag.
2. Run:
```
git checkout -b issue-[issue number]        # Create a new branch 'issue-[issue number]'

# Do your dev work here

git push origin issue-[issue number]        # Push to 'issue-[issue number]' branch
```

Please **DO NOT** push code to `main`. When you think your code is ready, feel free to create a Pull Request to the `main` branch and set **Bibo1604** as a reviewer.

