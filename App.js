    const Parent = React.createElement('div', {id: 'parent1'}, [
        React.createElement(
        'div', 
        {id: "child1"},
        [React.createElement('h1', {id: 'heading1'}, "Heading 1 of Child 1"),
         React.createElement('h2', {id: 'heading2'}, "Heading 2 of Child 1") 
        ]
    ),
    React.createElement(
        'div', 
        {id: "child2"},
        [React.createElement('h1', {id: 'heading3'}, "Heading 1 of Child 2"),
         React.createElement('h2', {id: 'heading4'}, "Heading 2 of Child 2") 
        ]
    )
    ]);
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(Parent);

    