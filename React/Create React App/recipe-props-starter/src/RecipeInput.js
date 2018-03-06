import React, {Component} from "react";

class RecipeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      instructions: "",
      ingredients: [""],
      img: ""
    };
  }
  render() {
    const {title, instructions, ingredients, img} = this.state;
    let inputs = ingredients.map((ing, i) => (
      <div>
        <label>
          <input
            type="text"
            name={`ingredient-${i}`}
            value={ing}
            size={45}
            autoComplete="off"
            placeholder="Ingredient"
            onChange={() => {}} />
        </label>
      </div>
    ));
  }
}

export default RecipeInput;