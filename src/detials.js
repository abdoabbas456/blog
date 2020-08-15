import React from "react";
import pet from "@frontendmasters/pet";
import { navigate } from "@reach/router";
import Modal from "./models";
import Carousel from "./Carousel";
import ErrorBoundaries from "./ErrorBoundaries";
import ThemeContext from "./ThemeContext";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      showmodel: false,
    };
  }
  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        url: animal.url,
        name: animal.name,
        animal: animal.type,
        loction: `${animal.contact.address.city},${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    }, console.error);
  }
  toggleModel = () => this.setState({ showmodel: !this.state.showmodel });
  adopt = () => navigate(this.state.url);
  render() {
    if (this.state.loading) {
      return <h1>loading ...</h1>;
    }
    const { animal, breed, loction, description, name, media,showmodel } = this.state;
    return (
      <div className="details">
        <div>
          <Carousel media={media} />
          <h1>{name}</h1>
          <h2>{`${animal}-${breed} - ${loction}`}</h2>

          <ThemeContext.Consumer>
            {(themeHook) => (
              <button 
              onClick={this.toggleModel}
              style={{ background: themeHook[0] }}>Adopt{name}</button>
            )}
          </ThemeContext.Consumer>

          <p>{description}</p>
          {
            showmodel ? (
              <Modal>
                <div>
                  <h1>would you like to adopt {name}?</h1>
                  <div className="buttons">
                    <button onClick={this.adopt}>yes</button>
                    <button onClick={this.toggleModel}>no</button>

                  </div>
                </div>
              </Modal>
            ):null
          }

        </div>
      </div>
    );
  }
}
export default function Detailswitherror(props) {
  return (
    <ErrorBoundaries>
      <Details {...props} />
    </ErrorBoundaries>
  );
}
