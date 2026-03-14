import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Study Kit - Best AI Tools for Students 2026',
  description: 'Hand-picked AI tools that help you study smarter, write better, and save hours every week.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
                <meta name="impact-site-verification" content="6d5e4f94-7b24-4d0a-b54a-fb4a9b1fa54b" />

        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { background: #0a0a0a; color: #ffffff; font-family: system-ui, sans-serif; }
          a { text-decoration: none; color: inherit; }
          .hero { text-align: center; padding: 80px 24px 48px; }
          .hero-pill { display: inline-block; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: #fff; padding: 6px 18px; border-radius: 99px; font-size: 13px; font-weight: 600; margin-bottom: 24px; }
          .hero h1 { font-size: 56px; font-weight: 800; line-height: 1.1; margin-bottom: 16px; background: linear-gradient(135deg, #ffffff, #a1a1aa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
          .hero p { font-size: 18px; color: #71717a; max-width: 500px; margin: 0 auto 24px; line-height: 1.6; }
          .hero-stats { font-size: 14px; color: #52525b; }
          .filters { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; padding: 0 24px 40px; }
          .filter-btn { padding: 8px 20px; border-radius: 99px; border: 1px solid #27272a; background: transparent; color: #a1a1aa; font-size: 13px; font-weight: 500; cursor: pointer; transition: all 0.2s; }
          .filter-btn:hover { border-color: #6366f1; color: #6366f1; }
          .filter-btn.active { background: #6366f1; border-color: #6366f1; color: #fff; }
          .container { max-width: 1100px; margin: 0 auto; padding: 0 24px 80px; }
          .section { margin-bottom: 48px; }
          .section-title { font-size: 14px; font-weight: 600; color: #6366f1; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid #1a1a2e; }
          .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; }
          .card { display: block; padding: 24px; background: #111111; border: 1px solid #1c1c1c; border-radius: 16px; cursor: pointer; transition: all 0.2s; }
          .card:hover { border-color: #6366f1; background: #13131f; transform: translateY(-2px); }
          .card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; }
          .card-name { font-size: 16px; font-weight: 700; color: #ffffff; }
          .card-desc { font-size: 14px; color: #71717a; line-height: 1.6; margin-bottom: 16px; }
          .card-footer { display: flex; justify-content: space-between; align-items: center; }
          .card-link { font-size: 13px; color: #6366f1; font-weight: 600; }
          .badges { display: flex; gap: 6px; flex-wrap: wrap; }
          .badge { font-size: 11px; padding: 3px 10px; border-radius: 99px; font-weight: 600; }
          .badge-special { background: #2a1f00; color: #f59e0b; border: 1px solid #3a2a00; }
          .badge-free { background: #052e16; color: #4ade80; border: 1px solid #064e25; }
          .badge-paid { background: #1f0a0a; color: #f87171; border: 1px solid #3a1111; }
          .footer { text-align: center; padding: 48px 24px; border-top: 1px solid #1c1c1c; }
          .footer h3 { font-size: 22px; font-weight: 700; margin-bottom: 8px; }
          .footer p { color: #52525b; font-size: 15px; }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}