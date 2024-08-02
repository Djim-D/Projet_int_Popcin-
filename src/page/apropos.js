import React from "react";
import Header from "../components/header";
import Search from "../components/search";
import Footer from "../components/footer";
import florenceImage from "../assets/img-florence.png";
import djimImage from "../assets/img-djim.png";
import "../styles/index.scss";

const Apropos = () => {
  return (
    <div>
      <Header />
      <Search />
      <div className="container-apropos">
        <div className="outer-border">
          <div className="title-section">
            <h2>LES CERVEAUX DU PROJET</h2>
          </div>
          <div className="container-profile">
            
          <div className="name-section">
            <h3>Florence Caetano Sinopolis</h3>
          </div>
          <div className="profile-card row">
            <div className="col-md-4 text-center">
              <img src={florenceImage} className="img-fluid" alt="Florence" />
            </div>
            <div className="text-profile col-md-8">
              <h1>Passionnée de design, HTML et CSS</h1>
              <p>Florence, 42 ans, originaire du Brésil, s'est installée à Québec en 2016 pour une nouvelle vie pleine de défis et d'opportunités.</p>
              <p>Après des années comme infirmière, elle a choisi de changer de carrière pour devenir intégratrice web ou designer. Attirée par le dynamisme et l'évolution constante du domaine, elle apprécie la créativité et l'attention aux détails nécessaires à la création de sites web. Florence aime résoudre des problèmes de manière technique et créative, et peaufiner chaque détail pour des sites esthétiques et performants.</p>
              <p>Elle voit dans cette nouvelle carrière une chance de se réinventer et de contribuer significativement à un domaine qui la passionne. Forte de ses expériences et de sa détermination, Florence est prête à exceller dans son nouveau rôle.</p>
            </div>
          </div>
          <div className="name-section">
            <h3>Djim Djibril Dieng</h3>
          </div>
          <div className="profile-card row">
            <div className="col-md-4 text-center">
              <img src={djimImage} className="img-fluid" alt="Djim" />
            </div>
            <div className="text-profile col-md-8">
              <h1>Passionné de programmation</h1>
              <p>Djim Djibril Dieng a 24 ans et est passionné par la programmation, les voitures et le gaming. Originaire du Sénégal, il a complété une formation en génie logiciel de trois ans dans son pays. Depuis son enfance, à l'âge de 12 ans, il a toujours eu un penchant pour l'informatique et la mécanique. En 2016, la programmation a pris le dessus, et c'est cette même année qu'il a commencé à apprendre les bases du HTML et du CSS.</p>
              <p>Après avoir terminé sa formation, Djim a cherché à combiner ses intérêts personnels avec ses compétences professionnelles. Il est attiré par le dynamisme et la constante évolution du domaine de la programmation. Les technologies et les tendances changent rapidement, offrant toujours de nouvelles opportunités de design et d'innovation. Il trouve également une grande satisfaction dans les processus de création, du concept initial au produit final, ainsi que dans la résolution de problèmes de manière technique et créative. Djim apprécie le défi de peaufiner chaque détail pour que tout fonctionne parfaitement, créant des sites internet esthétiques et performants.</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Apropos;
