export interface LessonContent {
  objectives: string[];
  keyTerms: { term: string; definition: string }[];
  graphPlaceholder?: { title: string; description: string };
  body: { heading?: string; text: string }[];
  formulas?: { name: string; formula: string; description: string }[];
  examples?: { title: string; text: string }[];
  practiceQuestions?: { question: string; answer: string }[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  content: LessonContent;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  instructor: string;
  instructorTitle: string;
  category: string;
  price: number;
  image: string;
  modules: Module[];
}

export const COURSES: Course[] = [
  {
    id: "intro-microeconomics",
    slug: "intro-microeconomics",
    title: "Introduction to Microeconomics",
    subtitle: "Foundations of individual and market decision-making",
    description:
      "Explore how individuals, households, and firms make decisions about resource allocation. Understand supply and demand, market equilibrium, elasticity, consumer and producer surplus, and market failures through rigorous economic analysis.",
    instructor: "Dr. Sarah Chen",
    instructorTitle: "Professor of Economics, Stanford University",
    category: "Economics",
    price: 0,
    image:
      "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1200",
    modules: [
      {
        id: "m1",
        title: "Module 1: Foundations of Economic Thinking",
        lessons: [
          {
            id: "m1-l1",
            title: "Scarcity, Choice, and Opportunity Cost",
            duration: "18 min",
            completed: true,
            content: {
              objectives: [
                "Define scarcity and explain why it is the central problem of economics",
                "Apply the concept of opportunity cost to real-world decisions",
                "Distinguish between positive and normative economic statements",
                "Explain the role of models in economic analysis",
              ],
              keyTerms: [
                {
                  term: "Scarcity",
                  definition:
                    "The fundamental economic problem that human wants exceed the available resources to satisfy them.",
                },
                {
                  term: "Opportunity Cost",
                  definition:
                    "The value of the next-best alternative foregone when making a choice.",
                },
                {
                  term: "Marginal Analysis",
                  definition:
                    "Decision-making that weighs the additional benefits of an action against its additional costs.",
                },
                {
                  term: "Ceteris Paribus",
                  definition:
                    'Latin for "all else equal"; a simplifying assumption used in economic models.',
                },
              ],
              body: [
                {
                  heading: "Why Scarcity Defines Economics",
                  text: "Economics begins with a simple but profound observation: human wants are unlimited, while the resources available to satisfy those wants are limited. This fundamental tension — scarcity — forces every individual, firm, and society to make choices. Because every choice involves a tradeoff, understanding how decisions are made lies at the heart of economic inquiry.",
                },
                {
                  heading: "The Logic of Opportunity Cost",
                  text: "Every choice carries a cost — not just the money paid, but the value of the best foregone alternative. If you spend Saturday studying economics, the opportunity cost is whatever else you would have done with that time. Economists argue that rational decision-making requires accounting for opportunity costs, not just financial outlays. This principle applies equally to firms deciding how to allocate capital and governments choosing how to spend public funds.",
                },
                {
                  heading: "Positive vs. Normative Economics",
                  text: 'Economists distinguish between positive statements — descriptive claims about how the world is — and normative statements — prescriptive claims about how the world should be. "A minimum wage increase reduces employment in low-skill labor markets" is a positive claim that can be tested against data. "We should raise the minimum wage to reduce inequality" is a normative claim that involves value judgments. Rigorous economic analysis focuses primarily on positive statements, while acknowledging the role of values in policy debates.',
                },
              ],
              examples: [
                {
                  title: "The Farmer's Dilemma",
                  text: "A farmer with 100 acres can grow wheat or corn. Choosing to plant all 100 acres in wheat means forgoing the revenue from corn. If corn would have earned $40,000 and wheat earns $45,000, the opportunity cost of wheat is $40,000. The net gain from choosing wheat is only $5,000 — not $45,000.",
                },
                {
                  title: "College Tuition and Time",
                  text: "The true cost of attending college includes not just tuition and books, but also the wages foregone by not working full-time. For many students, this opportunity cost exceeds the direct financial cost of enrollment.",
                },
              ],
              practiceQuestions: [
                {
                  question:
                    "A student can spend 3 hours either studying for an exam or working a part-time job that pays $15/hour. What is the opportunity cost of studying?",
                  answer:
                    "The opportunity cost of studying for 3 hours is $45 — the wages foregone by not working. Note that opportunity cost is measured in terms of the best alternative, not money spent.",
                },
                {
                  question:
                    'Classify the following as positive or normative: "The government should subsidize renewable energy because carbon emissions are socially harmful."',
                  answer:
                    'This is a normative statement — it contains the value judgment "should." The embedded claim that carbon emissions are harmful could be tested empirically (positive), but the policy prescription is normative.',
                },
              ],
            },
          },
          {
            id: "m1-l2",
            title: "The Production Possibilities Frontier",
            duration: "22 min",
            completed: true,
            content: {
              objectives: [
                "Draw and interpret a production possibilities frontier (PPF)",
                "Explain why the PPF is typically bowed outward",
                "Use the PPF to illustrate opportunity cost, efficiency, and economic growth",
                "Distinguish between movements along the PPF and shifts of the PPF",
              ],
              keyTerms: [
                {
                  term: "Production Possibilities Frontier (PPF)",
                  definition:
                    "A curve showing the maximum combinations of two goods an economy can produce given its resources and technology.",
                },
                {
                  term: "Productive Efficiency",
                  definition:
                    "Achieved when production occurs on the PPF — no resources are wasted.",
                },
                {
                  term: "Allocative Efficiency",
                  definition:
                    "Producing the combination of goods that best satisfies society's preferences.",
                },
                {
                  term: "Law of Increasing Costs",
                  definition:
                    "As production of one good increases, progressively more of the other good must be sacrificed.",
                },
              ],
              graphPlaceholder: {
                title: "Production Possibilities Frontier",
                description:
                  "Graph showing a bowed-outward PPF with consumer goods on the Y-axis and capital goods on the X-axis. Points inside the curve represent inefficiency; points on the curve represent efficiency; points outside are currently unattainable. The slope at any point equals the opportunity cost of producing one more unit of the good on the X-axis.",
              },
              body: [
                {
                  heading: "Constructing the PPF",
                  text: "Consider an economy that produces only two goods: consumer goods and capital goods. If all resources are devoted to consumer goods, the economy can produce some maximum amount. If all resources shift to capital goods, a different maximum is reached. The PPF traces all efficient combinations between these extremes.",
                },
                {
                  heading: "Why the PPF Bows Outward",
                  text: "Resources are not perfectly substitutable between uses. A textile worker reassigned to steel production will initially add significant output, but as more workers shift, those least suited to steel production are transferred, yielding smaller gains. This diminishing marginal productivity in each sector generates the bowed-out shape — the law of increasing opportunity costs.",
                },
                {
                  heading: "Economic Growth and the PPF",
                  text: "Technological progress, capital investment, or an increase in the labor force shifts the PPF outward — more of both goods becomes attainable. Importantly, investing in capital goods today (moving toward the capital end of the PPF) expands future productive capacity, shifting tomorrow's PPF further outward.",
                },
              ],
              formulas: [
                {
                  name: "Opportunity Cost Along the PPF",
                  formula: "OC = −ΔY / ΔX",
                  description:
                    "The opportunity cost of producing one additional unit of good X is the reduction in good Y required. This equals the absolute value of the slope of the PPF at that point.",
                },
              ],
              examples: [
                {
                  title: "Guns vs. Butter",
                  text: "The classic PPF example contrasts military goods (guns) and civilian goods (butter). An economy on its PPF cannot increase military spending without reducing civilian production. The trade-off is most costly when specialization is abandoned — the bowed shape reflects this.",
                },
              ],
              practiceQuestions: [
                {
                  question:
                    "If an economy is producing inside its PPF, what does this indicate about its resource use?",
                  answer:
                    "Production inside the PPF indicates productive inefficiency — the economy is not fully utilizing its available resources. This could result from unemployment, idle capital, or poor resource allocation. Moving to the PPF would allow more of both goods to be produced without additional resources.",
                },
                {
                  question:
                    "How does investment in education affect the PPF over time?",
                  answer:
                    "Education increases human capital, improving worker productivity. In the short run, resources devoted to education reduce current goods production (movement along the PPF). In the long run, higher productivity shifts the entire PPF outward, expanding the productive capacity of the economy.",
                },
              ],
            },
          },
        ],
      },
      {
        id: "m2",
        title: "Module 2: Supply and Demand",
        lessons: [
          {
            id: "m2-l1",
            title: "The Law of Demand",
            duration: "25 min",
            completed: false,
            content: {
              objectives: [
                "State the law of demand and explain its underlying logic",
                "Distinguish between a change in quantity demanded and a change in demand",
                "Identify and explain the determinants of demand",
                "Construct and interpret a demand schedule and demand curve",
              ],
              keyTerms: [
                {
                  term: "Law of Demand",
                  definition:
                    "Holding all else constant, as the price of a good rises, the quantity demanded falls; as price falls, quantity demanded rises.",
                },
                {
                  term: "Demand Curve",
                  definition:
                    "A graphical representation showing the inverse relationship between price and quantity demanded.",
                },
                {
                  term: "Substitution Effect",
                  definition:
                    "As a good's price rises, consumers substitute relatively cheaper alternatives.",
                },
                {
                  term: "Income Effect",
                  definition:
                    "As a good's price rises, real purchasing power falls, reducing the quantity demanded of normal goods.",
                },
                {
                  term: "Normal Good",
                  definition:
                    "A good for which demand increases as consumer income rises.",
                },
                {
                  term: "Inferior Good",
                  definition:
                    "A good for which demand decreases as consumer income rises.",
                },
              ],
              graphPlaceholder: {
                title: "The Demand Curve",
                description:
                  "A downward-sloping demand curve with Price (P) on the vertical axis and Quantity (Q) on the horizontal axis. A movement along the curve (e.g., from point A to point B due to a price change) illustrates a change in quantity demanded. A shift of the entire curve to the right represents an increase in demand; a shift to the left represents a decrease.",
              },
              body: [
                {
                  heading: "Why Demand Curves Slope Downward",
                  text: "The inverse relationship between price and quantity demanded reflects two complementary forces. The substitution effect: when the price of coffee rises, tea becomes relatively cheaper, leading consumers to substitute tea for coffee. The income effect: a price rise reduces real purchasing power, leaving consumers effectively poorer and buying less of normal goods.",
                },
                {
                  heading: "Determinants of Demand (Demand Shifters)",
                  text: "Five key factors shift the entire demand curve: (1) Consumer income — rising incomes increase demand for normal goods and decrease demand for inferior goods. (2) Prices of related goods — a rise in the price of a substitute increases demand; a rise in the price of a complement decreases demand. (3) Consumer tastes and preferences. (4) Expectations about future prices. (5) Number of buyers in the market.",
                },
                {
                  heading: "Individual vs. Market Demand",
                  text: "Individual demand represents one consumer's choices. Market demand is the horizontal summation of all individual demand curves — at each price, we sum the quantities demanded by every consumer. If there are 1,000 identical consumers each demanding 2 units at $5, market demand at $5 is 2,000 units.",
                },
              ],
              formulas: [
                {
                  name: "Linear Demand Function",
                  formula: "Qd = a − bP",
                  description:
                    "Where Qd is quantity demanded, P is price, a is the quantity intercept (demand when P = 0), and b is the slope coefficient representing how much quantity falls per unit increase in price.",
                },
              ],
              examples: [
                {
                  title: "Demand for Gasoline",
                  text: "When gasoline prices spiked in 2022, consumers reduced driving frequency, shifted toward fuel-efficient vehicles, and increased use of public transportation. These responses represent movements along the demand curve (higher price → lower quantity demanded). Separately, rising incomes in the 2010s shifted the entire demand curve for gasoline rightward.",
                },
              ],
              practiceQuestions: [
                {
                  question:
                    'For each scenario, identify whether it is "a change in demand" or "a change in quantity demanded" for coffee: (a) The price of coffee falls from $4 to $3. (b) A study shows coffee reduces the risk of diabetes.',
                  answer:
                    "(a) A change in quantity demanded — this is a movement along the existing demand curve caused by a price change. (b) A change in demand — improved health perceptions shift consumer preferences, moving the entire demand curve rightward.",
                },
                {
                  question:
                    "If consumers expect that the price of smartphones will fall sharply next month, how does this affect current demand? Why?",
                  answer:
                    "Current demand decreases (shifts left). Rational consumers delay purchases, anticipating they can buy the same good at a lower price in the future. This substitution across time reduces quantity demanded at every current price.",
                },
              ],
            },
          },
          {
            id: "m2-l2",
            title: "The Law of Supply",
            duration: "20 min",
            completed: false,
            content: {
              objectives: [
                "State the law of supply and explain the producer's logic",
                "Identify and explain the determinants of supply",
                "Distinguish between a change in quantity supplied and a change in supply",
                "Analyze how input cost changes affect supply curves",
              ],
              keyTerms: [
                {
                  term: "Law of Supply",
                  definition:
                    "Holding all else constant, as the price of a good rises, the quantity supplied increases.",
                },
                {
                  term: "Supply Curve",
                  definition:
                    "A graphical representation of the positive relationship between price and quantity supplied.",
                },
                {
                  term: "Input Costs",
                  definition:
                    "The costs of resources used in production; rising input costs decrease supply.",
                },
                {
                  term: "Technology",
                  definition:
                    "Improvements in technology reduce production costs and increase supply.",
                },
              ],
              graphPlaceholder: {
                title: "The Supply Curve",
                description:
                  "An upward-sloping supply curve with Price (P) on the vertical axis and Quantity (Q) on the horizontal axis. An increase in supply shifts the curve rightward (lower cost or better technology). A decrease in supply shifts it leftward (higher input costs, adverse weather for agriculture).",
              },
              body: [
                {
                  heading: "The Producer's Incentive",
                  text: "Higher prices create stronger incentives for producers to supply more. At a higher price, a wheat farmer can cover the cost of cultivating marginal land that would be unprofitable at a lower price. New firms also enter the market when prices rise, adding to market supply.",
                },
                {
                  heading: "Determinants of Supply (Supply Shifters)",
                  text: "Six key factors shift the entire supply curve: (1) Input prices — rising wages or raw material costs reduce supply. (2) Technology — innovations reduce per-unit production costs, increasing supply. (3) Number of sellers — more firms increase market supply. (4) Expectations of future prices — anticipated price increases may reduce current supply. (5) Government policies — taxes reduce supply; subsidies increase it. (6) Natural conditions — weather, natural disasters affect agricultural supply.",
                },
              ],
              formulas: [
                {
                  name: "Linear Supply Function",
                  formula: "Qs = c + dP",
                  description:
                    "Where Qs is quantity supplied, P is price, c is the quantity intercept, and d is the slope coefficient representing how much quantity supplied rises per unit increase in price.",
                },
              ],
              examples: [
                {
                  title: "Semiconductor Supply Shocks",
                  text: "The 2020–2021 semiconductor shortage illustrates a leftward supply shift. Factory closures, natural disasters, and geopolitical tensions reduced the global supply of chips. At every price level, fewer chips were available — the supply curve shifted left — causing prices to rise and quantities transacted to fall.",
                },
              ],
              practiceQuestions: [
                {
                  question:
                    "How does a $5 per-unit subsidy to corn farmers affect the supply of corn? Show the effect on a supply diagram.",
                  answer:
                    "A subsidy reduces the effective cost of production for each unit. This shifts the supply curve rightward — at every price, farmers are now willing to supply more corn than before. The vertical distance of the shift equals the subsidy amount ($5).",
                },
              ],
            },
          },
          {
            id: "m2-l3",
            title: "Market Equilibrium and Price Adjustment",
            duration: "28 min",
            completed: false,
            content: {
              objectives: [
                "Define market equilibrium and identify equilibrium price and quantity",
                "Explain how markets self-correct through price adjustment",
                "Analyze the effects of supply and demand shifts on equilibrium",
                "Apply comparative statics to predict market outcomes",
              ],
              keyTerms: [
                {
                  term: "Equilibrium",
                  definition:
                    "The price at which quantity demanded equals quantity supplied; the market clears.",
                },
                {
                  term: "Surplus",
                  definition:
                    "A situation where quantity supplied exceeds quantity demanded at the prevailing price; price falls to restore equilibrium.",
                },
                {
                  term: "Shortage",
                  definition:
                    "A situation where quantity demanded exceeds quantity supplied; price rises to restore equilibrium.",
                },
                {
                  term: "Comparative Statics",
                  definition:
                    "The method of comparing two equilibrium states to analyze the effect of a change in an exogenous variable.",
                },
              ],
              graphPlaceholder: {
                title: "Market Equilibrium",
                description:
                  "Supply and demand curves intersecting at the equilibrium point (P*, Q*). Above P*, a surplus is shown with an arrow pointing down (price falls). Below P*, a shortage is shown with an arrow pointing up (price rises). A rightward shift in demand is illustrated, moving the equilibrium from (P*, Q*) to (P₂, Q₂) where both price and quantity are higher.",
              },
              body: [
                {
                  heading: "The Self-Correcting Market",
                  text: "If price exceeds the equilibrium level, firms produce more than consumers wish to buy at that price — a surplus emerges. Unwanted inventories accumulate, pressuring firms to cut prices. As prices fall, quantity demanded rises and quantity supplied falls until the surplus is eliminated. The opposite dynamic eliminates shortages. This price adjustment mechanism coordinates supply and demand without central direction.",
                },
                {
                  heading: "Comparative Statics: Demand Shifts",
                  text: "When demand increases (shifts right), the equilibrium price and quantity both rise. When demand decreases (shifts left), both fall. The magnitude depends on the slopes of both curves — a steeper supply curve amplifies the price effect while dampening the quantity effect.",
                },
                {
                  heading: "Comparative Statics: Supply Shifts",
                  text: "When supply increases (shifts right), equilibrium price falls and quantity rises. When supply decreases (shifts left), price rises and quantity falls. This pattern explains why technological improvements in agriculture lower food prices even as populations grow.",
                },
              ],
              formulas: [
                {
                  name: "Equilibrium Condition",
                  formula: "Qd(P*) = Qs(P*)",
                  description:
                    "At equilibrium price P*, the quantity demanded equals the quantity supplied. To find P*, set the demand function equal to the supply function and solve.",
                },
                {
                  name: "Solving for Equilibrium",
                  formula: "a − bP = c + dP  →  P* = (a − c) / (b + d)",
                  description:
                    "Setting linear demand equal to linear supply and solving for price gives the equilibrium price. Substitute back into either equation to find equilibrium quantity.",
                },
              ],
              examples: [
                {
                  title: "Housing Market in Tech Hubs",
                  text: "The rapid growth of technology employment in San Francisco increased demand for housing (rightward demand shift). With housing supply constrained by zoning regulations (inelastic supply curve), the demand shift produced large price increases with relatively small increases in quantity. This illustrates how supply elasticity determines whether demand shifts manifest primarily as price or quantity changes.",
                },
              ],
              practiceQuestions: [
                {
                  question:
                    "Given Qd = 100 − 2P and Qs = 20 + 3P, find the equilibrium price and quantity.",
                  answer:
                    "Set Qd = Qs: 100 − 2P = 20 + 3P → 80 = 5P → P* = 16. Substitute: Q* = 100 − 2(16) = 68. Equilibrium: P* = $16, Q* = 68 units.",
                },
                {
                  question:
                    "A drought reduces wheat supply while simultaneously rising incomes increase demand for wheat products. What happens to equilibrium price and quantity?",
                  answer:
                    "Price unambiguously rises — both the supply decrease (pushing price up) and the demand increase (pushing price up) reinforce each other. The effect on quantity is ambiguous: the demand increase raises quantity while the supply decrease reduces it. The net effect on quantity depends on the relative magnitudes of the two shifts.",
                },
              ],
            },
          },
        ],
      },
      {
        id: "m3",
        title: "Module 3: Elasticity",
        lessons: [
          {
            id: "m3-l1",
            title: "Price Elasticity of Demand",
            duration: "30 min",
            completed: false,
            content: {
              objectives: [
                "Calculate price elasticity of demand using the midpoint method",
                "Classify demand as elastic, inelastic, or unit elastic",
                "Explain the determinants of price elasticity of demand",
                "Analyze the relationship between elasticity and total revenue",
              ],
              keyTerms: [
                {
                  term: "Price Elasticity of Demand (PED)",
                  definition:
                    "A measure of the responsiveness of quantity demanded to a change in price, calculated as the percentage change in quantity demanded divided by the percentage change in price.",
                },
                {
                  term: "Elastic Demand",
                  definition:
                    "When |PED| > 1; quantity demanded is highly responsive to price changes.",
                },
                {
                  term: "Inelastic Demand",
                  definition:
                    "When |PED| < 1; quantity demanded is relatively unresponsive to price changes.",
                },
                {
                  term: "Unit Elastic",
                  definition:
                    "When |PED| = 1; a 1% price change causes exactly a 1% change in quantity demanded.",
                },
                {
                  term: "Total Revenue",
                  definition:
                    "Price multiplied by quantity sold (TR = P × Q); its relationship to elasticity determines pricing strategy.",
                },
              ],
              graphPlaceholder: {
                title: "Elasticity and the Demand Curve",
                description:
                  "Two demand curves: one steep (inelastic) and one flat (elastic). For the elastic curve, a small price increase causes a large quantity decrease. For the inelastic curve, the same price increase causes only a small quantity decrease. A separate panel shows total revenue rectangles at two prices, illustrating how TR rises when price falls for elastic demand but falls when price falls for inelastic demand.",
              },
              body: [
                {
                  heading: "Why Elasticity Matters",
                  text: "Price elasticity tells us how much quantity demanded changes in response to price changes. This is critical for business pricing decisions, tax policy design, and predicting the effects of market interventions. A firm that raises prices on an inelastic good collects more revenue; one that raises prices on an elastic good loses customers and revenue.",
                },
                {
                  heading: "Determinants of Price Elasticity",
                  text: "Four key factors determine how elastic demand will be: (1) Availability of substitutes — goods with close substitutes (Pepsi for Coke) are more elastic than goods without substitutes (insulin). (2) Necessity vs. luxury — necessities tend to be inelastic; luxuries tend to be elastic. (3) Share of income — goods that consume a large share of income (cars) are more elastic than those consuming a small share (salt). (4) Time horizon — demand is more elastic in the long run as consumers have more time to adjust behavior.",
                },
                {
                  heading: "Elasticity and Total Revenue",
                  text: "For elastic demand (|PED| > 1): raising price reduces total revenue; lowering price increases total revenue. For inelastic demand (|PED| < 1): raising price increases total revenue; lowering price reduces total revenue. This relationship explains why drug companies charge high prices for patented medications (inelastic demand) while airlines discount last-minute seats (elastic demand at high prices).",
                },
              ],
              formulas: [
                {
                  name: "Price Elasticity of Demand",
                  formula: "PED = (% ΔQd) / (% ΔP)",
                  description:
                    "The ratio of the percentage change in quantity demanded to the percentage change in price. Always negative for normal goods (downward-sloping demand); typically reported as absolute value.",
                },
                {
                  name: "Midpoint Method",
                  formula:
                    "PED = [(Q₂ − Q₁) / ((Q₁ + Q₂)/2)] ÷ [(P₂ − P₁) / ((P₁ + P₂)/2)]",
                  description:
                    "The midpoint method uses the average of the two prices and quantities as the base, giving the same elasticity value regardless of the direction of change.",
                },
                {
                  name: "Total Revenue",
                  formula: "TR = P × Q",
                  description:
                    "Total revenue rises when price rises and demand is inelastic (|PED| < 1). Total revenue falls when price rises and demand is elastic (|PED| > 1).",
                },
              ],
              examples: [
                {
                  title: "Gasoline and Insulin",
                  text: "Gasoline has relatively inelastic short-run demand (estimated PED ≈ −0.25) because few immediate substitutes exist and driving is a near-necessity. Insulin has nearly perfectly inelastic demand for diabetics — life depends on it and no substitutes exist. Contrast this with brand-name cereals, where numerous substitutes yield much higher elasticity values (PED ≈ −2 to −4).",
                },
              ],
              practiceQuestions: [
                {
                  question:
                    "When a coffee shop raises its latte price from $4 to $5, daily sales fall from 200 to 150 cups. Calculate the price elasticity of demand using the midpoint method. Is demand elastic or inelastic?",
                  answer:
                    "% ΔQ = (150 − 200) / ((150 + 200)/2) = −50/175 ≈ −28.6%. % ΔP = (5 − 4) / ((4 + 5)/2) = 1/4.5 ≈ 22.2%. PED = −28.6% / 22.2% ≈ −1.29. |PED| = 1.29 > 1, so demand is elastic. The price increase reduces total revenue.",
                },
                {
                  question:
                    "A government wants to raise tax revenue by taxing cigarettes. Should it expect a large or small reduction in quantity consumed? Explain using elasticity.",
                  answer:
                    "Cigarette demand is relatively inelastic because nicotine is addictive (few substitutes) and the expenditure share for heavy smokers is moderate. A tax that raises price will cause a relatively small decrease in quantity — the government collects substantial revenue with limited reduction in consumption. This inelasticity also means the tax burden falls largely on consumers.",
                },
              ],
            },
          },
        ],
      },
    ],
  },
];

export function getCourse(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

export function getLesson(
  courseSlug: string,
  lessonId: string
): { course: Course; lesson: Lesson; module: Module } | undefined {
  const course = getCourse(courseSlug);
  if (!course) return undefined;
  for (const mod of course.modules) {
    for (const lesson of mod.lessons) {
      if (lesson.id === lessonId) {
        return { course, lesson, module: mod };
      }
    }
  }
  return undefined;
}

export function getAllLessons(
  course: Course
): { lesson: Lesson; module: Module }[] {
  return course.modules.flatMap((mod) =>
    mod.lessons.map((lesson) => ({ lesson, module: mod }))
  );
}

export function getAdjacentLessons(
  course: Course,
  lessonId: string
): {
  prev: { lesson: Lesson; module: Module } | null;
  next: { lesson: Lesson; module: Module } | null;
} {
  const all = getAllLessons(course);
  const idx = all.findIndex((l) => l.lesson.id === lessonId);
  return {
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx < all.length - 1 ? all[idx + 1] : null,
  };
}
