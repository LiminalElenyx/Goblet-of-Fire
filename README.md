# Goblet-of-Fire
Harry Potter themed JavaScript project demonstrating filter, map, functions, and random selection.
# Goblet of Fire (JavaScript Practice Project)

This project was inspired while binge-watching the *Harry Potter* film series — specifically **The Goblet of Fire**.

While watching, I started thinking about the Goblet itself as if it were a function:  
it “filters” eligible candidates based on rules (such as minimum age), then selects one champion from each school.  
Since I’ve recently been learning and practicing JavaScript array methods like `filter()` and `map()`, I decided to try modeling how the Goblet might work if it were written in code.

## What This Project Demonstrates

- Working with arrays of objects
- Filtering data based on eligibility rules
- Random selection from an array
- Applying the same logic across multiple data sets using `map()`
- Writing clean, reusable functions

## How It Works

- Each school is represented as an array of student objects
- Students must be **17 or older** to be eligible  
  *(with a special override for Harry Potter, because… canon)*
- One eligible champion is randomly selected per school
- The final result is an array containing one champion from each school

## Running the Project

```bash
node goblet.js
```

## Technologies Used

| Technology | Purpose |
|----------|--------|
| JavaScript (ES6) | Core language and logic |
| Node.js | Runtime environment |
| ES Modules | Modular code structure using `import` / `export` |
| Git & GitHub | Version control and repository hosting |

## Installation & Running the Project

### Requirements
- Node.js (v14 or higher recommended)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/LiminalElenyx/Goblet-of-Fire.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Goblet-of-Fire
   ```
3. Run the Project:
   ```bash
   node.js
   ```

The selected champions will be logged to the console

