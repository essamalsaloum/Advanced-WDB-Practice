class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };
    setTimeout(() => {
      const randInst = Math.floor(
        Math.random() *
        this.state.instructors.length
      );
      const hobbyIndex = Math.floor(
        Math.random() *
        this.state.instructors[randInst].length
      );
      const instructors = this.state.instructors.slice();
      instructors[randInst] = Object.assign({}, instructors[randInst]);
      instructors[randInst].hobbies = instructors[randInst].hobbies.slice();
    }, 5000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div>
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
