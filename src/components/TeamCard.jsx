// One team member: photo fades softly into a glow so any photo background blends with the page.
export default function TeamCard({ member }) {
  return (
    <article className="group flex flex-col items-center text-center">
      <div className="relative h-40 w-40 sm:h-44 sm:w-44">
        {/* soft themed glow behind the photo */}
        <div aria-hidden="true"
          className="absolute -inset-2 rounded-full bg-gradient-to-br from-emerald-400/40 via-teal-300/25 to-sky-400/30 blur-xl opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
        <img src={member.photo} alt={`Photo of ${member.name}`} loading="lazy" width="176" height="176"
          className="relative h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 dark:brightness-90" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
      <p className="text-sm text-emerald-700 dark:text-emerald-400">{member.role}</p>
    </article>
  );
}
