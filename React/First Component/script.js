class Pet extends React.Component {
  render() {
    const h2 = ReactDOMFactories.h2(null, "Moxie");
    const img = ReactDOMFactories.img({
      src: "https://images.unsplash.com/photo-1511876849877-f8d0d953d2e0?ixlib=rb-0.3.5&s=4488ff58aa49f9fc89091a95f9c4fa4d&auto=format&fit=crop&w=1050&q=80",
      alt: "Moxie the cat"
    });
  }
}