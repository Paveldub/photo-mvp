import './styles.scss'

export default function Spinner() {
  return (
    <div className="film-roll">
      <div className="film-roll__wrapper">
        <div className="film-roll__top"></div>
        <div className="film-roll__top-sub-elem"></div>
        <div className="film-roll__body">
          <div className="film-roll__body-elem">
            <div className="film-roll__body-elem-dot dot-first"></div>
            <div className="film-roll__body-elem-dot dot-second"></div>
            <div className="film-roll__body-elem-dot dot-third"></div>
            <div className="film-roll__body-elem-dot dot-fourth"></div>
            <div className="film-roll__body-elem-dot dot-fifth"></div>
            <div className="film-roll__body-elem-dot dot-sixth"></div>
            <div className="film-roll__body-elem-dot dot-sevent"></div>
          </div>
        </div>
        <div className="film-roll__bottom"></div>
      </div>
    </div>
  )
}
