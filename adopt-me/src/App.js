const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed)
    ])
};



const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, { name: "Milo", animal: "Dog", breed: "Jack Russel"}),
            React.createElement(Pet, { name: "Diesel", animal: "Dog", breed: "Lab"}),
            React.createElement(Pet, { name: "Goldy", animal: "Dog", breed: "Lab/Poodle"})
        ]
    )
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);