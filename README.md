# Uncommon React Bug: Memory Leak from useEffect Event Listener

This repository demonstrates a subtle bug in a React component that can lead to memory leaks. The bug involves attaching an event listener inside the `useEffect` hook without properly removing it when the component unmounts.