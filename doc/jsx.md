## What is JSX


- L'utilisation du JSX n'est pas obligatoire mais vous facilite la vie

- **J**ava**S**cript avec une syntaxe proche du **X**ML
- Ce n'est pas un language de templating

- N'est pas compilé (comme Angular or Vue templates) mais transpilé

Notes: 

- peut être transpiller par babel, vite via esbuild 

- avec vite: 

https://babeljs.io/docs/
https://babeljs.io/docs/babel-preset-react


## Error React is not imported

- Par défaut, le JSX n'importe aucunes librairie. Il est donc nécessaire d'importer React

###

<!-- .slide: class="transition" -->

# JSX

##==##

# Hello JSX

<!-- .slide: class="with-code" -->

```javascript
const element = <h1>Hello JSX</h1>;

function testResult(condition) {
  if (condition) {
    return <div>Yeah, it's true</div>;
  } else {
    return <div>No, it's false</div>;
  }
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Hello JSX

```javascript
function wrapWithHeader(elmt) {
  return <header>{elmt}</header>;
}

return wrapWithHeader(<h1>Hello JSX</h1>);
```

<!-- .element: class="big-code" -->

Notes:
you can receive them as parameter

##==##

<!-- .slide: class="with-code" -->

# Hello JSX

```javascript
const el4 = <div>the response is {2 + 5 - 7}</div>;

const big = (message) => <h1>{message.toUpperCase()}</h1>;

const weird = <strong>{<small> Well... </small>}</strong>;
```

<!-- .element: class="big-code" -->

Notes:

- interpolate any JS expression
- (even other JSX if you want)

##==##

<!-- .slide: class="with-code" -->

# Hello JSX

```typescript
const image = <img src={imgUrl} alt="an image"></img>;

const input = <input tabIndex="1" type="text" value={value} />;

const invalid = (
  <p>first paragraph</p>
  <p>second paragraph</p>
);
```

<!-- .element: class="big-code" -->

Notes:

- attributes are strings in "" or arbitrary JS expressions
- empty tags are always closed (it's XHTML ;)
- a JSX expression must have a root tag (because it's an expression)

##==##

<!-- .slide: class="with-code" -->

# Hello JSX

```typescript
const valid = [<p>first paragraph</p>, <p>second paragraph</p>];

const fragment = (
  <>
    <p>first paragraph</p>
    <p>second paragraph</p>
  </>
);
```

<!-- .element: class="big-code" -->


##==##

<!-- .slide: class="with-code" -->

# Hello JSX

```typescript
const fragment = (
  <>
    <p>first paragraph</p>
    <p>
      second <strong>paragraph</strong>
    </p>
  </>
);
// become in React
const fragment = React.createElement(
  React.Fragment,
  null,
  React.createElement('p', null, 'first paragraph'),
  React.createElement('p', null, 'second ', React.createElement('strong', null, 'paragraph'))
);
```

Notes:

- In React, JSX is convert to React.createElement

##==##

<!-- .slide: class="center" -->
