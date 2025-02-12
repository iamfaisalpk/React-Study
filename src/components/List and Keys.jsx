const fruits = ['Apple', 'Banana', 'Cherry'];

const FruitList = () => (
<ul>
    {fruits.map((fruit, index) => (
    <li key={index}>{fruit}</li>
    ))}
</ul>
);

export default FruitList;

