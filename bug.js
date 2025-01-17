```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly setting an event listener inside the useEffect hook without cleanup
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    console.log('Scrolled!');
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```