const data = [
  {
    name: "Disease detection advance",
    desc: "This project aims to make use of Machine Learning techniques to detect instances of Parkinson's Disease. The project performs the following tasks: \n1️⃣ Data Collection 2️⃣ Data Preprocessing\n3️⃣ Exploratory Data Analysis\n4️⃣ Dataset Balancing & Scaling\n5️⃣ Machine Learning Models Training & Evaluation",
    link: "https://github.com/iayushtiwari/disease-detection-advance",
    image: "https://media.licdn.com/dms/image/sync/v2/D5627AQG3TbiFYcCemA/articleshare-shrink_160/articleshare-shrink_160/0/1730531590802?e=1733054400&v=beta&t=-U0FWrPnXt03ciyAP2MJnG2d3LbDZadp8iakMLKEU-k",
  },
  {
    name: "Traffic control",
    desc: "This project is an application of the Lambda Architecture that tracks the traffic safety and congestion of each street in city. It shows recent traffic crashes, red light and speed camera violations, and traffic patterns of 1,250 street segments within city limits. It was completed as the final project Sikhim Sikkim professional university - Big Data Application Architecture.",
    link: "https://github.com/iayushtiwari/Traffic-Control",
    image: "https://media.licdn.com/dms/image/sync/v2/D5627AQFlLwI_a-FiBg/articleshare-shrink_160/articleshare-shrink_160/0/1730520572543?e=1733054400&v=beta&t=nrLJY3uhzMM7OokOac5ZuuDGPmS_EU8j8Sfdyf8TJTM",
  },
  {
    name: "Fake New Detection",
    desc: "The project aims to develop a machine-learning model capable of identifying andclassifying any news article as fake or not. The distribution of fake news can potentially have highly adverse effects on people and culture. This project involves building and training a model to classify news as fake news or not using a diverse dataset of news articles. We have used four techniques to determine the results of themodel",
    link: "https://githun.com/iayushtiwari/fakenewsdetection",
    image: "https://media.licdn.com/dms/image/sync/v2/D5627AQFLjNHtvc3YfA/articleshare-shrink_160/articleshare-shrink_160/0/1730531814288?e=1733054400&v=beta&t=nOzf1R7AVo72BDmlnNEIELMi1qYaPCm7YhtbWMB_dIY",
  },
  {
    name: "Flipkart Review Sentiment Analysis",
    desc: "Flipkart is one of the most popular Indian companies. It is an e-commerce platform that competes with popular e-commerce platforms like Amazon. One of the most popularuse cases of data science is the task of sentiment analysis of product reviews sold on e-commerce platforms",
    link: "https://githun.com/iayushtiwari/flipkart-sentiment-analysis",
    image: "https://media.licdn.com/dms/image/sync/v2/D5627AQEYycIJx3RvQA/articleshare-shrink_160/articleshare-shrink_160/0/1730531355544?e=1733054400&v=beta&t=daVdvAOfG1qgtvXRlj_z2keU6BoVVBemJOVhSK0vSYI",
  },
  {
    name: "Heart Disease Detection System",
    desc: "Logistic regression is a type of regression analysis in statistics used for prediction of outcome of a categorical dependent variable from a set of predictor or independent variables. In logistic regression the dependent variable is always binary. Logistic regression is mainly used to for prediction and also calculating the probability of success.",
    link: "https://github.com/iayushtiwari/Heart-Disease-Prediction-using-Logistic-Regression",
    image: "https://media.licdn.com/dms/image/sync/v2/D5627AQEC0uihALnemw/articleshare-shrink_160/articleshare-shrink_160/0/1730530962815?e=1733054400&v=beta&t=TfzPFqQD_W7_VvuGpeq_CiqlmLSNmYoPTL31V2Fh7WM",
  },
  {
    name: "Movie Recommendation",
    desc: "This is a Python-based movie recommendation system that implements text-retrieval techniques and Graphical User Interface. One special thing about this system is that its reommendations were tailored around users' emotion of the moment. There are so many existing movie recommender systems available in the market, but only a small number of them were designed based on users' psychological needs. The main objective of this project is to fill this gap by making traditional recommender system more user-driven",
    link: "https://github.com/iayushtiwari/movieRecommendationAccordingtoEmotions",
    image: "https://media.licdn.com/dms/image/sync/v2/D5627AQF2b3KWj-YtMw/articleshare-shrink_160/articleshare-shrink_160/0/1730531121740?e=1733054400&v=beta&t=gp7OLoUw8Y2vcQr2Lv-GW9wcUakyZag75uB991uL7IE",
  },
];

// const proj = document.querySelector(".Projects");
// data.forEach((project) => {
//   var div = document.createElement("div");
//   div.innerHTML = (
//     <>
//       <img src={project.image} alt={project.name} />
//       <h2>{project.name}</h2>
//       <p>{project.desc}</p>
//       <button type="button">
//         <a href={project.link}>Read More</a>
//       </button>
//     </>
//   );
//   proj.appendChild(p);
// });
// proj.appendChild(
//   <button>
//     <a href="https://github.com/iayushtiwari">
//       Go to Github
//       <i class="bx bxl-github"></i>
//     </a>
//   </button>
// );

const proj = document.querySelector(".Projects");
data.forEach((project) => {
  const div = document.createElement("div");

  // Create elements and append them to the div
  const image = document.createElement("img");
  image.src = project.image;
  image.alt = project.name;
  div.appendChild(image);

  const h2 = document.createElement("h2");
  h2.textContent = project.name;
  div.appendChild(h2);

  const p = document.createElement("p");
  p.textContent = project.desc;
  div.appendChild(p);

  const button = document.createElement("button");
  const link = document.createElement("a");
  link.href = project.link;
  link.textContent = "Read More";
  button.appendChild(link);
  div.appendChild(button);

  // Append the div to the proj element
  proj.appendChild(div);
});

// Create the final button and append it to proj
const finalButton = document.createElement("button");
const finalLink = document.createElement("a");
finalButton.classList = ["buttonLast"];
finalLink.href = "https://github.com/iayushtiwari";
finalLink.textContent = "Load More";
// ... add the icon here if needed
finalButton.appendChild(finalLink);
proj.appendChild(finalButton);
