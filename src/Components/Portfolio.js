import React, { Component } from 'react';
import ModalImage from 'react-modal-image';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image + '.jpg';
        var projectImageThum = 'images/portfolio/' + projects.image + '-th.jpg';
        return <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            {/* <a href={projects.url} title={projects.title}> */}
            {/* <img alt={projects.title} src={projectImage} /> */}
            <ModalImage
              alt={projects.title}
              small={projectImageThum}
              medium={projectImage}
              hideDownload={true}
              hideZoom={true}
              showRotate={false}
            />
            <div className="overlayy">
              <div className="portfolio-item-meta">
                <h5>{projects.title}</h5>
                <p>{projects.description || ''}</p>

                {(projects.links != undefined) ?
                  <div className="links">
                    {(projects.links.android) ? <a target="_blank" rel="noopener noreferrer" href={projects.links.android}><i className="fa  fa-android"></i></a> : <></>}
                    {(projects.links.apple) ? <a target="_blank" rel="noopener noreferrer" href={projects.links.apple}><i className="fa fa-apple"></i></a> : <></>}
                    {(projects.links.link) ? <a target="_blank" rel="noopener noreferrer" href={projects.links.link}><i className="fa fa-link"></i></a> : <></>}
                  </div>
                  :
                  <></>
                }

              </div>
            </div>

            {/* </a> */}
          </div>
        </div >
      })
    }

    return (
      <section id="portfolio" >

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Mira algunos de mis trabajos.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
