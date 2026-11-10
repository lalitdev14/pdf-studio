# PDF Studio

A browser-first PDF workspace built with React, TypeScript, Vite, PDF-Lib and PDF.js. Files are processed locally in the browser; the app does not upload documents to an application server.

## Included in this MVP

- Image to PDF: multiple images, ordering, page size, orientation and fit/fill options.
- Merge PDFs.
- Extract selected page ranges, odd pages or even pages into a new PDF.
- Rotate all pages.
- Basic structural PDF optimization/re-save (does not guarantee smaller output).
- Resize pages to A3/A4/A5/Letter/Legal/Tabloid.
- Rebuild a PDF in a custom page order.
- PDF to PNG rendering (downloads each page separately).
- Add a diagonal text watermark.
- Add page numbers.
- Extract selectable text to TXT (scanned-document OCR is not included).

## Not included yet

True PDF password encryption, OCR, direct editing of existing text, editable form fields, Office conversion, advanced image recompression, cloud storage, accounts, collaboration and server-side background jobs require additional engines/services. The UI explicitly avoids claiming these operations are complete.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

Import this repository in Vercel. The included `vercel.json` configures Vite, `npm run build`, and the `dist` output directory. No environment variables are required for this browser-only MVP.

## Privacy and limits

Files are processed in the browser tab and are not sent to an app backend. Large documents use browser memory; keep the tab open during processing. PDF.js and PDF-Lib have format limitations, and scanned PDFs need OCR for text extraction.
