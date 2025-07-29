import Image from "next/image";

const samplePosts = [
  { id: 1, image: "/images/instagram1.jpg", caption: "Playtime fun!" },
  { id: 2, image: "/images/instagram2.jpg", caption: "Healthy snacks" },
  { id: 3, image: "/images/instagram3.jpg", caption: "Family moments" },
  { id: 4, image: "/images/instagram4.jpg", caption: "Creative crafts" },
  { id: 5, image: "/images/instagram5.jpg", caption: "Outdoor adventures" },
  { id: 6, image: "/images/instagram6.jpg", caption: "Learning together" },
];

export default function InstagramFeed() {
  return (
    <section className="w-full bg-transparent rounded-3xl p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6 text-blue-400 text-left w-full">
        Instagram Highlights
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
        {samplePosts.map((post) => (
          <div
            key={post.id}
            className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white/40 bg-white/40 backdrop-blur-xl hover:scale-105 transition-transform duration-300 group"
          >
            <div className="relative h-56 w-full">
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-medium drop-shadow-lg">
                  {post.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
