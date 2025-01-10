export default function Stats({ data }) {
  return (
    <div className="stats stats-vertical lg:stats-horizontal bg-transparent mt-4 ">
      <div className="stat">
        <div className="stat-title">Lenguaje</div>
        <div className="stat-value">
          {data?.original_language.toUpperCase()}
        </div>
        <div className="stat-desc">País de Origen : {data?.origin_country}</div>
      </div>

      <div className="stat">
        <div className="stat-title">Lanzamiento</div>
        <div className="stat-value">{data?.release_date}</div>
        <div className="stat-desc">Popularidad ↗︎: {data?.popularity}</div>
      </div>

      <div className="stat">
        <div className="stat-title">Critica</div>
        <div className="stat-value">{data?.vote_average}</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </div>
    </div>
  );
}
