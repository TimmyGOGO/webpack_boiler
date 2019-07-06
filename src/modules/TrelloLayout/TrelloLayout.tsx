import React from 'react'
import styled from 'styled-components'
import './trelloLayout.css'

export const StyledTrelloLayoutContainer = styled.div`
`

export interface ITrelloLayout {

}

export class TrelloLayout extends React.PureComponent<ITrelloLayout> {

  render() {
    return (
      <StyledTrelloLayoutContainer>
        <section className="wrapper">
          <ul className="column__list">
            <li className="column__item">
              <div className="column__title--wrapper">
                <h2>Incoming Bugs</h2>
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <ul className="card__list">
                <li className="card__item">
                  <span className="card__tag card__tag--browser">Browser</span>
                  <h6 className="card__title">Lightbox loading issue on Safari</h6>
                  <ol className="card__actions">
                    <li className="card__actions--wrapper">
                      <i className="fas fa-align-left"></i></li>
                  </ol>
                </li>
                <li className="card__item">
                  <span className="card__tag card__tag--high">High Priority</span>
                  <h6 className="card__title">Notifications Not Sending #4</h6>
                </li>
                <li className="card__item">
                  <span className="card__tag card__tag--browser">Browser</span>
                  <h6 className="card__title">Multiple Select Broken</h6>
                  <ol className="card__actions">
                    <li className="card__actions--wrapper">
                      <i className="fas fa-align-left"></i></li>
                  </ol>
                </li>
                <li className="card__item">
                  <span className="card__tag card__tag--browser">Browser</span>
                  <h6 className="card__title">Drag and drop issues in Chrome</h6>
                  <ol className="card__actions">
                    <li className="card__actions--wrapper">
                      <i className="fas fa-align-left"></i></li>
                  </ol>
                </li>
                <li className="card__item">
                  <span className="card__tag card__tag--design">Design</span>
                  <span className="card__tag card__tag--high">High Priority</span>
                  <h6 className="card__title">Download icon rendering issue</h6>
                  <ol className="card__actions">
                    <li className="card__actions--wrapper">
                      <i className="fas fa-align-left"></i></li>
                  </ol>
                </li>
                <li className="card__item">
                  <span className="card__tag card__tag--browser">Browser</span>
                  <span className="card__tag card__tag--low">Low Priority</span>
                  <h6 className="card__title">Tab to comment goes to wrong field</h6>
                  <ol className="card__actions">
                    <li className="card__actions--wrapper">
                      <i className="fas fa-align-left"></i></li>
                  </ol>
                </li>
                <li className="card__item">
                  <span className="card__tag card__tag--high">High Priority</span>
                  <h6 className="card__title">Video load issues on IE 11</h6>
                  <ol className="card__actions">
                    <li className="card__actions--wrapper">
                      <i className="fas fa-align-left"></i></li>
                  </ol>
                </li>
              </ul>
              <div className="column__item--cta">
                <i className="fas fa-plus"></i>
                <h4>Add another card</h4>
              </div>
            </li>
            <li className="column__item">
              <div className="column__title--wrapper">
                <h2>In Progress</h2>
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <ul className="card__list">
                <li className="card__item">
                  <span className="card__tag card__tag--high">High Priotity</span>
                  <h6 className="card__title">Localization</h6>
                  <ol className="card__actions">
                    <li className="card__actions--wrapper">
                      <i className="far fa-check-square"></i><span className="card__actions--text">1/4</span></li>
                      <ol className="card__avatars">
                    <li className="card__avatars--item">
                      {/* Photo by Philip Martin on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80" alt="Man standing near balcony" className="avatar__image" />
                    </li>
                  </ol>
                  </ol>
                </li>
                <li className="card__item">
                  <img src="https://trello-attachments.s3.amazonaws.com/5501f5265b23195e950742e9/300x300/5a2bf59113b7211315c399c8b9814e9d/Thumbs_Up_Icons.jpg" className="card__image" />
                  <span className="card__tag card__tag--design">Design</span>
                  <h6 className="card__title">"Like" button in comments</h6>
                  <ol className="card__actions">
                    <li className="card__actions--wrapper">
                      <i className="fas fa-paperclip"></i><span className="card__actions--text">1</span></li>
                      <ol className="card__avatars">
                    <li className="card__avatars--item">
                      {/* Photo by Michael Alfonso on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman, Lady, Female" className="avatar__image" />
                    </li>
                        <li className="card__avatars--item">
                      {/* Photo by Toa Heftiba on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman standing near blue steel gate" className="avatar__image" />
                    </li>
                  </ol>
                  </ol>
                </li>
                <li className="card__item">
                  <h6 className="card__title">Operation: All The Bugs</h6>
                  <ol className="card__actions">
                    <li className="card__actions--wrapper">
                      <i className="fas fa-align-left"></i></li>
                      <ol className="card__avatars">
                    <li className="card__avatars--item">
                      {/* Photo by Philip Martin on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80" alt="Man standing near balcony" className="avatar__image" />
                    </li>
                  </ol>
                  </ol>
                </li>
                <li className="card__item">
          <span className="card__tag card__tag--low">Low Priority</span>
                  <h6 className="card__title">Make JSON Pretty</h6>
                  <ol className="card__actions">
                    <li className="card__actions--wrapper">
                      <i className="fas fa-align-left"></i></li>
                  <ol className="card__avatars">
                    <li className="card__avatars--item">
                      {/* Photo by Toa Heftiba on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman standing near blue steel gate" className="avatar__image" />
                    </li>
                  </ol>
                  </ol>
                </li>
              </ul>
              <div className="column__item--cta">
                <i className="fas fa-plus"></i>
                <h4>Add another card</h4>
              </div>
            </li>
        <li className="column__item">
              <div className="column__title--wrapper">
                <h2>QA</h2>
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <ul className="card__list">
                <li className="card__item">
                  <span className="card__tag card__tag--browser">Browser</span>
                  <h6 className="card__title">Embed all the things</h6>
                  <ol className="card__actions">
                    <li className="card__actions--wrapper">
                      <i className="fas fa-align-left"></i></li>
                  <ol className="card__avatars">
                    <li className="card__avatars--item">
                      {/* Photo by Philip Martin on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80" alt="Man standing near balcony" className="avatar__image" />
                    </li>
                  </ol>
                  </ol>
                </li>
            <li className="card__item">
              <span className="card__tag card__tag--mobile">Mobile</span>
                  <span className="card__tag card__tag--high">High Priority</span>
                  <h6 className="card__title">Pop-over max width issue on mobile</h6>
              <ol className="card__actions">
                    <li className="card__actions--wrapper">
                      <i className="fas fa-align-left"></i>
                      <i className="far fa-comment"></i><span className="card__actions--text">1</span></li>
                      <ol className="card__avatars">
                    <li className="card__avatars--item">
                      {/* Photo by Michael Alfonso on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman, Lady, Female" className="avatar__image" />
                    </li>
                        <li className="card__avatars--item">
                      {/* Photo by Toa Heftiba on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman standing near blue steel gate" className="avatar__image" />
                    </li>
                  </ol>
                  </ol>
                </li>
            <li className="card__item">
              <span className="card__tag card__tag--mobile">Mobile</span>
                  <span className="card__tag card__tag--browser">Browser</span>
                  <h6 className="card__title">Animated gif support</h6>
                  <ol className="card__actions">
                    <li className="card__actions--wrapper">
                      <i className="fas fa-paperclip"></i><span className="card__actions--text">1</span></li>
                    <ol className="card__avatars">
                        <li className="card__avatars--item">
                      {/* Photo by Toa Heftiba on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman standing near blue steel gate" className="avatar__image" />
                    </li>
                      <li className="card__avatars--item">
                      {/* Photo by Michael Alfonso on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman, Lady, Female" className="avatar__image" />
                    </li>
                  </ol>
                  </ol>
                </li>
              </ul>
              <div className="column__item--cta">
                <i className="fas fa-plus"></i>
                <h4>Add another card</h4>
              </div>
            </li>
        <li className="column__item">
              <div className="column__title--wrapper">
                <h2>Ready For Launch</h2>
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <ul className="card__list">
                <li className="card__item">
                  <h6 className="card__title">Improved API documentation</h6>
                  <ol className="card__actions">
                    <li className="card__actions--wrapper">
                      <i className="far fa-comment"></i><span className="card__actions--text">1</span></li>
                    <ol className="card__avatars">
                    <li className="card__avatars--item">
                      {/* Photo by Michael Alfonso on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman, Lady, Female" className="avatar__image" />
                    </li>
                        <li className="card__avatars--item">
                      {/* Photo by Toa Heftiba on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman standing near blue steel gate" className="avatar__image" />
                    </li>
                  </ol>
                  </ol>
                </li>
            <li className="card__item">
                  <span className="card__tag card__tag--high">High Priority</span>
                  <h6 className="card__title">Slow log-in issue</h6>
              <ol className="card__actions">
                    <li className="card__actions--wrapper">
                      <i className="far fa-comment"></i><span className="card__actions--text">1</span></li>
                      <ol className="card__avatars">
                    <li className="card__avatars--item">
                      {/* Photo by Philip Martin on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80" alt="Man standing near balcony" className="avatar__image" />
                    </li>
                        <li className="card__avatars--item">
                      {/* Photo by Michael Alfonso on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman, Lady, Female" className="avatar__image" />
                    </li>
                  </ol>
                  </ol>
                </li>
            <li className="card__item">
                  <span className="card__tag card__tag--high">High Priority</span>
                  <h6 className="card__title">HTML 5 Support</h6>
                  <ol className="card__actions">
                    <ol className="card__avatars">
                    <li className="card__avatars--item">
                      {/* Photo by Philip Martin on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80" alt="Man standing near balcony" className="avatar__image" />
                    </li>
                        <li className="card__avatars--item">
                      {/* Photo by Toa Heftiba on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman standing near blue steel gate" className="avatar__image" />
                    </li>
                  </ol>
                  </ol>
                </li>
        <li className="card__item">
                  <span className="card__tag card__tag--design">Design</span>
          <span className="card__tag card__tag--mobile">Mobile</span>
                  <h6 className="card__title">iOS app redesign</h6>
                  <ol className="card__actions">
                    <li className="card__actions--wrapper">
                      <i className="far fa-comment"></i><span className="card__actions--text">1</span></li>
                    <ol className="card__avatars">
                    <li className="card__avatars--item">
                      {/* Photo by Philip Martin on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80" alt="Man standing near balcony" className="avatar__image" />
                    </li>
                        <li className="card__avatars--item">
                      {/* Photo by Michael Alfonso on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman, Lady, Female" className="avatar__image" />
                    </li>
                  </ol>
                  </ol>
                </li>
              </ul>
              <div className="column__item--cta">
                <i className="fas fa-plus"></i>
                <h4>Add another card</h4>
              </div>
            </li>
        <li className="column__item">
              <div className="column__title--wrapper">
                <h2>Live</h2>
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <ul className="card__list">
                <li className="card__item">
                  <span className="card__tag card__tag--design">Design</span>
                  <span className="card__tag card__tag--high">High Priority</span>
                  <h6 className="card__title">Material Design for Android</h6>
                  <ol className="card__actions">
                    <ol className="card__avatars">
                    <li className="card__avatars--item">
                      {/* Photo by Philip Martin on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80" alt="Man standing near balcony" className="avatar__image" />
                    </li>
                        <li className="card__avatars--item">
                      {/* Photo by Michael Alfonso on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman, Lady, Female" className="avatar__image" />
                    </li>
                  </ol>
                  </ol>
                </li>
            <li className="card__item">
              <img src="https://trello-attachments.s3.amazonaws.com/5501f41bc85bf1470c685b5c/300x246/f758c01c7295548771c91bd52ccd6779/Emoji_Icons.jpg" className="card__image" />
                  <span className="card__tag card__tag--mobile">Mobile</span>
              <span className="card__tag card__tag--browser">Broser</span>
                  <h6 className="card__title">Emoji support</h6>
              <ol className="card__actions">
                <li className="card__actions--wrapper">
                  <i className="far fa-comment"></i>
                  <span className="card__actions--text">1</span>
                  <i className="fas fa-paperclip"></i>
                  <span className="card__actions--text">1</span>
                </li>
                <ol className="card__avatars">
                    <li className="card__avatars--item">
                      {/* Photo by Philip Martin on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80" alt="Man standing near balcony" className="avatar__image" />
                    </li>
                        <li className="card__avatars--item">
                      {/* Photo by Michael Alfonso on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman, Lady, Female" className="avatar__image" />
                    </li>
                  </ol>
              </ol>
                </li>
            <li className="card__item">
              <span className="card__tag card__tag--design">Design</span>
                  <span className="card__tag card__tag--browser">Browser</span>
                  <h6 className="card__title">New icons for web</h6>
                  <ol className="card__actions">
                    <ol className="card__avatars">
                    <li className="card__avatars--item">
                      {/* Photo by Philip Martin on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80" alt="Man standing near balcony" className="avatar__image" />
                    </li>
                        <li className="card__avatars--item">
                      {/* Photo by Michael Alfonso on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman, Lady, Female" className="avatar__image" />
                    </li>
                  </ol>
                  </ol>
                </li>
        <li className="card__item">
                  <span className="card__tag card__tag--high">High Priority</span>
                  <h6 className="card__title">Pasting from clipboard</h6>
                  <ol className="card__actions">
                    <ol className="card__avatars">
                    <li className="card__avatars--item">
                      {/* Photo by Philip Martin on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80" alt="Man standing near balcony" className="avatar__image" />
                    </li>
                        <li className="card__avatars--item">
                      {/* Photo by Michael Alfonso on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman, Lady, Female" className="avatar__image" />
                    </li>
                  </ol>
                  </ol>
                </li>
              </ul>
              <div className="column__item--cta">
                <i className="fas fa-plus"></i>
                <h4>Add another card</h4>
              </div>
            </li>
          </ul>
        </section>
      </StyledTrelloLayoutContainer>
    )
  }
}