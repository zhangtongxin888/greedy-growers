# Launch evidence

Last updated: 2026-08-18 23:32 CST

## Deployment

- Vercel project: `greedy-growers-guide`
- Production deployment: `dpl_A7TRqjZx9Js6QrxHLG4nVjyFjTm9` (`READY`)
- Production preview: `https://greedy-growers-guide.vercel.app`
- Long-term source: `https://github.com/zhangtongxin888/greedy-growers`, branch `main`
- Deployed source commit: `f7160b6fe094f32ac495e87f5bad826dabc6b41d`
- Vercel Git metadata matched repository `zhangtongxin888/greedy-growers`, branch `main`, and the commit above.

## DNS snapshot and recovery point

Authoritative nameservers: `launch1.spaceship.net`, `launch2.spaceship.net`.

Original web records, preserved because the registrar page did not load:

- Apex A: `34.216.117.25`
- Apex A: `54.149.79.189`
- No apex AAAA, MX, TXT, or CAA records were returned.
- No `www` A or CNAME record was returned.

Vercel's strict project-specific recommendation:

- Apex A: `216.198.79.1`
- Apex A: `64.29.17.1`
- `www` CNAME: `ab4b1675941ebb4d.vercel-dns-017.com.`

Recovery page: `https://www.spaceship.com/zh/application/advanced-dns-application/manage/greedy-growers-guide.wiki/`

The Spaceship page timed out on the initial navigation and one safe retry. No DNS fields loaded and no records were changed. The browser session was released with no controlled tabs remaining.

## Mandatory post-launch evidence

| Gate | Current result | Minimal evidence |
|---|---|---|
| Formal HTTPS site | Not passed | HTTP still returned a Spaceship Parking Page; HTTPS timed out before DNS changes. |
| Formal sitemap | Not passed | The build contains a valid seven-URL XML sitemap, but the formal-domain URL is not live. |
| Exact GSC ownership | Not verified | GSC was not opened because formal HTTPS is a prerequisite and the browser retry limit was reached. |
| Exact GSC sitemap success | Not submitted | Submission must wait for the same exact verified GSC property and live sitemap. |

Do not mark this launch complete until all four rows have fresh successful evidence.
