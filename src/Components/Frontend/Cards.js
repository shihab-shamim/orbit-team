export default function GalaxyTeam({
  attributes,
  RichTextComponent,
  setAttributes,
}) {
  const { orbitTeam = {}, options = {} } = attributes || {};
  const { tag, title, subTitle, brankMark, brankTitle, brankEst } = orbitTeam;

  return (
    <section className="tsbo_galaxy-section" aria-labelledby="team-title">
      {options.showTag && !RichTextComponent && (
        <span
          className="tsbo_eyebrow"
          dangerouslySetInnerHTML={{ __html: tag }}
        ></span>
      )}
      {options.showTag && RichTextComponent && (
        <RichTextComponent
          tagName="span"
          val={tag}
          onChange={(val) =>
            setAttributes({ orbitTeam: { ...orbitTeam, tag: val } })
          }
          className="tsbo_eyebrow"
          placeholder="Tag"
        />
      )}
      {options.showTitle && !RichTextComponent && (
        <h2 id="team-title" dangerouslySetInnerHTML={{ __html: title }}></h2>
      )}
      {options.showTitle && RichTextComponent && (
        <RichTextComponent
          tagName="h2"
          val={title}
          onChange={(val) =>
            setAttributes({ orbitTeam: { ...orbitTeam, title: val } })
          }
          className="tsbo_title"
          placeholder="Title"
        />
      )}
      {options.showSubTitle && !RichTextComponent && (
        <p
          className="tsbo_lede"
          dangerouslySetInnerHTML={{ __html: subTitle }}
        ></p>
      )}
      {options.showSubTitle && RichTextComponent && (
        <RichTextComponent
          tagName="p"
          val={subTitle}
          onChange={(val) =>
            setAttributes({ orbitTeam: { ...orbitTeam, subTitle: val } })
          }
          className="tsbo_lede"
          placeholder="Sub Title"
        />
      )}

      <div
        className="tsbo_galaxy"
        role="group"
        aria-label="Team members orbiting around the brand"
      >
        <div className="tsbo_galaxy__rings" aria-hidden="true">
          {/* teamMembers */}
          {/* <span className="tsbo_halo"></span>
          <span className="tsbo_ring--1"></span>
          <span className="tsbo_ring--2"></span>
          <span className="tsbo_ring--3"></span> */}
          {orbitTeam?.teamMembers?.map((member, i) => (
            <span key={i} className={`tsbo_ring--${i + 1}`}></span>
          ))}
        </div>

        <div
          className="tsbo_core"
          aria-hidden="true"
          style={
            options?.uploadImage
              ? {
                  background: `url(${options?.image}) center/cover no-repeat`,
                }
              : {}
          }
        >
          {!options?.uploadImage && (
            <div>
              {!RichTextComponent && (
                <div
                  className="tsbo_core__mark"
                  dangerouslySetInnerHTML={{ __html: brankMark }}
                ></div>
              )}
              {RichTextComponent && (
                <RichTextComponent
                  tagName="div"
                  val={brankMark}
                  onChange={(val) =>
                    setAttributes({
                      orbitTeam: { ...orbitTeam, brankMark: val },
                    })
                  }
                  className="tsbo_core__mark"
                  placeholder="Mark"
                />
              )}
              {!RichTextComponent && (
                <div
                  className="tsbo_core__title"
                  dangerouslySetInnerHTML={{ __html: brankTitle }}
                ></div>
              )}
              {RichTextComponent && (
                <RichTextComponent
                  tagName="div"
                  val={brankTitle}
                  onChange={(val) =>
                    setAttributes({
                      orbitTeam: { ...orbitTeam, brankTitle: val },
                    })
                  }
                  className="tsbo_core__title"
                  placeholder="Title"
                />
              )}
              {!RichTextComponent && (
                <div
                  className="tsbo_core__sub"
                  dangerouslySetInnerHTML={{ __html: brankEst }}
                ></div>
              )}
              {RichTextComponent && (
                <RichTextComponent
                  tagName="div"
                  val={brankEst}
                  onChange={(val) =>
                    setAttributes({
                      orbitTeam: { ...orbitTeam, brankEst: val },
                    })
                  }
                  className="tsbo_core__sub"
                  placeholder="Est."
                />
              )}
            </div>
          )}
        </div>

        {/* Inner orbit · 7 seats */}
        <ul className="tsbo_orbit tsbo_orbit--1" style={{ "--total": 7 }}>
          {[
            { name: "Ava Chen", img: 47 },
            { name: "Marcus Reed", img: 12 },
            { name: "Priya Shah", img: 32 },
            { name: "Jonas Weber", img: 15 },
            { name: "Lina Park", img: 49 },
            { name: "Diego Alvarez", img: 14 },
            { name: "Diego Alvarez", img: 14 },
          ].map((member, i) => (
            <li className="tsbo_star" key={i} style={{ "--seat": i }}>
              <div className="tsbo_star__inner">
                <a href="#" aria-label={member.name}>
                  <img
                    src={`https://i.pravatar.cc/120?img=${member.img}`}
                    alt=""
                  />
                  <span className="tsbo_name">{member.name}</span>
                </a>
              </div>
            </li>
          ))}
        </ul>

        {/* Middle orbit · 9 seats */}
        <ul className="tsbo_orbit tsbo_orbit--2" style={{ "--total": 9 }}>
          {[
            { name: "Hana Sato", img: 20 },
            { name: "Noah Bennett", img: 8 },
            { name: "Sara Nilsen", img: 44 },
            { name: "Omar Idris", img: 33 },
            { name: "Ella Brooks", img: 23 },
            { name: "Ravi Mehta", img: 51 },
            { name: "Mei Lin", img: 36 },
            { name: "Tom Hayes", img: 11 },
            { name: "Zara Khan", img: 45 },
          ].map((member, i) => (
            <li className="tsbo_star" key={i} style={{ "--seat": i }}>
              <div className="tsbo_star__inner">
                <a href="#" aria-label={member.name}>
                  <img
                    src={`https://i.pravatar.cc/120?img=${member.img}`}
                    alt=""
                  />
                  <span className="tsbo_name">{member.name}</span>
                </a>
              </div>
            </li>
          ))}
        </ul>

        {/* Outer orbit · 12 seats */}
        <ul className="tsbo_orbit tsbo_orbit--3" style={{ "--total": 12 }}>
          {[
            { name: "Felix Moore", img: 3 },
            { name: "Isla Ward", img: 25 },
            { name: "Kenji Mori", img: 17 },
            { name: "Anya Volkov", img: 41 },
            { name: "Sam Cole", img: 13 },
            { name: "Nora Singh", img: 38 },
            { name: "Mateo Cruz", img: 18 },
            { name: "Yui Tanaka", img: 29 },
            { name: "Leo Hart", img: 4 },
            { name: "Maya Owens", img: 48 },
            { name: "Theo Vance", img: 7 },
            { name: "Aiko Hara", img: 26 },
          ].map((member, i) => (
            <li className="tsbo_star" key={i} style={{ "--seat": i }}>
              <div className="tsbo_star__inner">
                <a href="#" aria-label={member.name}>
                  <img
                    src={`https://i.pravatar.cc/120?img=${member.img}`}
                    alt=""
                  />
                  <span className="tsbo_name">{member.name}</span>
                </a>
              </div>
            </li>
          ))}
        </ul>

        {/* Orbit 4 · 7 seats */}
        {/* <ul className="tsbo_orbit tsbo_orbit--4" style={{ "--total": 7 }}>
          {[
            { name: "Ava Chen", img: 47 },
            { name: "Marcus Reed", img: 12 },
            { name: "Priya Shah", img: 32 },
            { name: "Jonas Weber", img: 15 },
            { name: "Lina Park", img: 49 },
            { name: "Diego Alvarez", img: 14 },
            { name: "Diego Alvarez", img: 14 }
          ].map((member, i) => (
            <li className="tsbo_star" key={i} style={{ "--seat": i }}>
              <div className="tsbo_star__inner">
                <a href="#" aria-label={member.name}>
                  <img src={`https://i.pravatar.cc/120?img=${member.img}`} alt="" />
                  <span className="tsbo_name">{member.name}</span>
                </a>
              </div>
            </li>
          ))}
        </ul> */}
      </div>
    </section>
  );
}
