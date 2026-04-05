const posts = [
  {
    title: 'The Power of Pawn Structure: A Beginner\'s Guide',
    excerpt: 'Understanding pawn structure is one of the most important skills a developing chess player can build. In this guide, we break down the key concepts every beginner needs to know.',
    author: 'IM Sofia Marchetti',
    date: 'March 10, 2026',
    category: 'Strategy',
    readTime: '8 min read',
  },
  {
    title: 'How to Prepare for Your First FIDE-Rated Tournament',
    excerpt: 'Your first rated tournament can be nerve-wracking. GM Alexander Petrov shares his top preparation tips — from opening choices to mental preparation and clock management.',
    author: 'GM Alexander Petrov',
    date: 'March 3, 2026',
    category: 'Tournament Prep',
    readTime: '12 min read',
  },
  {
    title: '5 Tactical Patterns Every Intermediate Player Must Know',
    excerpt: 'Tactical vision separates good players from great ones. IM Carlos Rodrigues walks through five essential patterns that appear again and again at club and tournament level.',
    author: 'IM Carlos Rodrigues',
    date: 'February 24, 2026',
    category: 'Tactics',
    readTime: '10 min read',
  },
  {
    title: 'Teaching Chess to Children: Our Junior Approach',
    excerpt: 'What makes chess education work for young minds? FM Daniel Borg shares the E4 Academy\'s philosophy for making chess engaging, educational, and fun for players aged 6–16.',
    author: 'FM Daniel Borg',
    date: 'February 17, 2026',
    category: 'Youth Chess',
    readTime: '7 min read',
  },
  {
    title: 'The King\'s Indian Defense: A Complete Beginner Overview',
    excerpt: 'The King\'s Indian is one of chess\'s most dynamic openings. This article introduces the key ideas, plans, and pawn structures so you can start playing it with confidence.',
    author: 'GM Alexander Petrov',
    date: 'February 8, 2026',
    category: 'Openings',
    readTime: '15 min read',
  },
  {
    title: 'E4 Spring Open 2026: Tournament Preview',
    excerpt: 'Our biggest event of the year is just weeks away. Here\'s everything you need to know about the E4 Spring Open 2026 — format, prizes, participants, and how to register.',
    author: 'E4 Chess Academy',
    date: 'February 1, 2026',
    category: 'Academy News',
    readTime: '5 min read',
  },
]

const categories = ['All', 'Strategy', 'Tactics', 'Openings', 'Tournament Prep', 'Youth Chess', 'Academy News']

export default function Blog() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-6 text-center bg-dark-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="section-label mb-4">Knowledge & Insight</p>
          <h1 className="section-title mb-6">Blog & News</h1>
          <div className="divider-gold mb-6" />
          <p className="text-gold-100/55 font-body leading-relaxed">
            Chess education, strategy insights, tournament news, and academy updates — written by our coaches.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 px-6 border-b border-gold-400/15 sticky top-20 z-30 bg-dark-900/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
          {categories.map((c) => (
            <button
              key={c}
              className="px-5 py-2 text-xs font-body font-bold tracking-widest uppercase border border-gold-400/25 text-gold-100/60 hover:border-gold-400/50 hover:text-gold-400 transition-all first:bg-gold-400 first:text-dark-900 first:border-gold-400"
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Featured */}
          <div className="card-luxury grid lg:grid-cols-2 overflow-hidden mb-10">
            <div className="bg-dark-700 flex items-center justify-center p-20 border-b lg:border-b-0 lg:border-r border-gold-400/10">
              <span className="text-9xl text-gold-400/15">♛</span>
            </div>
            <div className="p-10 flex flex-col justify-center">
              <div className="flex gap-3 mb-4">
                <span className="text-xs border border-gold-400/30 text-gold-400 px-3 py-1 font-body">{posts[0].category}</span>
                <span className="text-xs text-gold-100/35 font-body self-center">{posts[0].readTime}</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-gold-100 mb-4 leading-tight">{posts[0].title}</h2>
              <p className="text-gold-100/55 font-body leading-relaxed mb-6">{posts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-gold-100 font-body">{posts[0].author}</p>
                  <p className="text-xs text-gold-100/40 font-body">{posts[0].date}</p>
                </div>
                <button className="btn-outline text-xs">Read More</button>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((p) => (
              <div key={p.title} className="card-luxury flex flex-col">
                <div className="bg-dark-700 h-40 flex items-center justify-center border-b border-gold-400/10">
                  <span className="text-6xl text-gold-400/15">♟</span>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex gap-3 mb-4">
                    <span className="text-xs border border-gold-400/20 text-gold-400/70 px-2 py-0.5 font-body">{p.category}</span>
                    <span className="text-xs text-gold-100/30 font-body self-center">{p.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-gold-100 mb-3 leading-snug">{p.title}</h3>
                  <p className="text-sm text-gold-100/50 font-body leading-relaxed mb-6 flex-1 line-clamp-3">{p.excerpt}</p>
                  <div className="border-t border-gold-400/10 pt-4 flex justify-between items-end">
                    <div>
                      <p className="text-xs font-bold text-gold-100/70 font-body">{p.author}</p>
                      <p className="text-xs text-gold-100/35 font-body">{p.date}</p>
                    </div>
                    <button className="text-xs text-gold-400 hover:text-gold-300 font-body font-bold transition-colors">Read →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-outline">Load More Articles</button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 bg-dark-800 text-center">
        <div className="max-w-lg mx-auto">
          <p className="section-label mb-4">Stay Updated</p>
          <h2 className="section-title mb-6">Chess Insights in Your Inbox</h2>
          <div className="divider-gold mb-8" />
          <p className="text-gold-100/55 font-body mb-8">
            Weekly chess tips, strategy articles, and academy news — no spam, unsubscribe anytime.
          </p>
          <form className="flex gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-dark-700 border border-gold-400/20 px-4 py-3 text-sm text-gold-100/80 placeholder-gold-100/30 focus:outline-none focus:border-gold-400/50 font-body"
            />
            <button type="submit" className="btn-primary text-xs px-6">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  )
}
