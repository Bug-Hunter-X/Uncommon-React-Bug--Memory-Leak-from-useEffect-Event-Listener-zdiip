```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      console.log('Scrolled!');
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```