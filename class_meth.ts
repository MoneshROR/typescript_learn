class MyClass {
    name = "This is my class how can I do";
    getName = () => {
      return this.name;
    };
  }
  const c = new MyClass();
  const g = c.getName;
  // Prints "MyClass" instead of crashing
  console.log(g());