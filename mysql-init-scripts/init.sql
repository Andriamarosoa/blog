-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Hôte : mysql
-- Généré le : mar. 25 mars 2025 à 16:52
-- Version du serveur : 8.0.41
-- Version de PHP : 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `blog_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `attachment`
--

CREATE TABLE `attachment` (
  `id` int NOT NULL,
  `path` varchar(255) NOT NULL,
  `blogId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `attachment`
--


CREATE TABLE `blog` (
  `id` int NOT NULL,
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` int NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `token` (
  `id` int NOT NULL,
  `value` varchar(255) NOT NULL,
  `userId` int NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `expiredAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `user` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;





ALTER TABLE `attachment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_e18f31cb6b820bca5e5891ce796` (`blogId`);


ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_fc46ede0f7ab797b7ffacb5c08d` (`userId`);


ALTER TABLE `token`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_94f168faad896c0786646fa3d4a` (`userId`);


ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_638bac731294171648258260ff` (`password`);


ALTER TABLE `attachment`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

ALTER TABLE `blog`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;


ALTER TABLE `token`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;


ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;


ALTER TABLE `attachment`
  ADD CONSTRAINT `FK_e18f31cb6b820bca5e5891ce796` FOREIGN KEY (`blogId`) REFERENCES `blog` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `blog`
--
ALTER TABLE `blog`
  ADD CONSTRAINT `FK_fc46ede0f7ab797b7ffacb5c08d` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `token`
--
ALTER TABLE `token`
  ADD CONSTRAINT `FK_94f168faad896c0786646fa3d4a` FOREIGN KEY (`userId`) REFERENCES `user` (`id`);
COMMIT;

INSERT INTO `user` (`id`, `name`, `email`, `password`) VALUES
(1, 'Tinah Raherinjato', 'tinah.andriamarosoa@gmail.com', 'Qwerty12345'),
(2, 'Carene Andrisoa', 'carene@gmail.com', '123456');



INSERT INTO `blog` (`id`, `title`, `content`, `userId`, `createdAt`) VALUES
(1, 'Yamaha R1: A Legacy of Speed and Innovation', '<p data-start=\"203\" data-end=\"545\" class=\"\">The Yamaha YZF-R1, commonly known as the <strong data-start=\"244\" data-end=\"250\">R1</strong>, is one of the most iconic superbikes ever built. Since its debut in 1998, the R1 has been at the forefront of sportbike technology, combining cutting-edge engineering with breathtaking performance. Whether you\'re a track enthusiast or a street rider, the R1 remains a dream machine for many.</p>\r\n<h2 data-start=\"547\" data-end=\"582\" class=\"\"><strong data-start=\"550\" data-end=\"580\">Evolution of the Yamaha R1</strong></h2>\r\n<h3 data-start=\"584\" data-end=\"622\" class=\"\"><strong data-start=\"588\" data-end=\"620\">First Generation (1998–1999)</strong></h3>\r\n<p data-start=\"623\" data-end=\"864\" class=\"\">Yamaha revolutionized the liter-bike category by introducing the first <strong data-start=\"694\" data-end=\"704\">YZF-R1</strong> in 1998. With a <strong data-start=\"721\" data-end=\"749\">998cc inline-four engine</strong>, <strong data-start=\"751\" data-end=\"774\">lightweight chassis</strong>, and an aggressive design, the R1 instantly set a new benchmark in the superbike world.</p>\r\n<h3 data-start=\"866\" data-end=\"913\" class=\"\"><strong data-start=\"870\" data-end=\"911\">Mid-2000s: Refinement and Power Gains</strong></h3>\r\n<p data-start=\"914\" data-end=\"1174\" class=\"\">Over the years, Yamaha continued refining the R1, improving its handling, aerodynamics, and power delivery. In <strong data-start=\"1025\" data-end=\"1033\">2004</strong>, the introduction of the <strong data-start=\"1059\" data-end=\"1081\">under-seat exhaust</strong> and <strong data-start=\"1086\" data-end=\"1111\">Ram Air intake system</strong> gave the R1 a more aggressive look and improved performance.</p>\r\n<h3 data-start=\"1176\" data-end=\"1213\" class=\"\"><strong data-start=\"1180\" data-end=\"1211\">2009: Crossplane Revolution</strong></h3>\r\n<p data-start=\"1214\" data-end=\"1475\" class=\"\">The <strong data-start=\"1218\" data-end=\"1236\">2009 Yamaha R1</strong> introduced the <strong data-start=\"1252\" data-end=\"1277\">crossplane crankshaft</strong>, inspired by Yamaha’s MotoGP bikes. This design significantly improved throttle response and provided a more linear power delivery, making the R1 one of the most refined superbikes on the market.</p>\r\n<h3 data-start=\"1477\" data-end=\"1512\" class=\"\"><strong data-start=\"1481\" data-end=\"1510\">Modern Era (2015–Present)</strong></h3>\r\n<p data-start=\"1513\" data-end=\"1819\" class=\"\">The latest R1 models feature <strong data-start=\"1542\" data-end=\"1567\">ride-by-wire throttle</strong>, <strong data-start=\"1569\" data-end=\"1594\">IMU-based electronics</strong>, <strong data-start=\"1596\" data-end=\"1614\">quick shifters</strong>, and a <strong data-start=\"1622\" data-end=\"1651\">sleek, aerodynamic design</strong>. With a <strong data-start=\"1660\" data-end=\"1685\">200-horsepower engine</strong>, advanced electronics, and lightweight construction, the modern R1 is a true track weapon that can also be tamed for street riding.</p>\r\n<h2 data-start=\"1821\" data-end=\"1859\" class=\"\"><strong data-start=\"1824\" data-end=\"1857\">Why Riders Love the Yamaha R1</strong></h2>\r\n<ol data-start=\"1861\" data-end=\"2522\">\r\n<li data-start=\"1861\" data-end=\"2043\" class=\"\">\r\n<p data-start=\"1864\" data-end=\"2043\" class=\"\"><strong data-start=\"1864\" data-end=\"1891\">Raw Power &amp; Performance</strong> – The R1 consistently delivers <strong data-start=\"1923\" data-end=\"1945\">high-revving power</strong> and <strong data-start=\"1950\" data-end=\"1981\">lightning-fast acceleration</strong>, making it perfect for track riders and adrenaline junkies.</p>\r\n</li>\r\n<li data-start=\"2044\" data-end=\"2196\" class=\"\">\r\n<p data-start=\"2047\" data-end=\"2196\" class=\"\"><strong data-start=\"2047\" data-end=\"2061\">MotoGP DNA</strong> – Yamaha’s experience in MotoGP directly influences the R1’s design and performance, including its <strong data-start=\"2161\" data-end=\"2193\">crossplane engine technology</strong>.</p>\r\n</li>\r\n<li data-start=\"2197\" data-end=\"2383\" class=\"\">\r\n<p data-start=\"2200\" data-end=\"2383\" class=\"\"><strong data-start=\"2200\" data-end=\"2224\">Advanced Electronics</strong> – The latest R1 features <strong data-start=\"2250\" data-end=\"2322\">traction control, slide control, wheelie control, and launch control</strong>, providing riders with unmatched stability and confidence.</p>\r\n</li>\r\n<li data-start=\"2384\" data-end=\"2522\" class=\"\">\r\n<p data-start=\"2387\" data-end=\"2522\" class=\"\"><strong data-start=\"2387\" data-end=\"2409\">Aggressive Styling</strong> – The sharp, aerodynamic design and LED lighting make the R1 one of the best-looking sportbikes on the market.</p></li></ol>', 1, '2025-03-25 17:51:57'),
(2, 'The Magic of Playing Guitar 🎸', '<p data-start=\"40\" data-end=\"238\" class=\"\">The guitar is one of the most versatile and expressive musical instruments. Whether you\'re strumming chords around a campfire or shredding solos on stage, the guitar connects people through music.</p>\r\n<h2 data-start=\"240\" data-end=\"266\" class=\"\"><strong data-start=\"243\" data-end=\"264\">Why Learn Guitar?</strong></h2>\r\n<ul data-start=\"267\" data-end=\"542\">\r\n<li data-start=\"267\" data-end=\"353\" class=\"\">\r\n<p data-start=\"269\" data-end=\"353\" class=\"\"><strong data-start=\"269\" data-end=\"286\">Easy to Start</strong> – With just a few basic chords, you can play many popular songs.</p>\r\n</li>\r\n<li data-start=\"354\" data-end=\"445\" class=\"\">\r\n<p data-start=\"356\" data-end=\"445\" class=\"\"><strong data-start=\"356\" data-end=\"381\">Portable &amp; Convenient</strong> – Unlike pianos or drums, a guitar is easy to carry anywhere.</p>\r\n</li>\r\n<li data-start=\"446\" data-end=\"542\" class=\"\">\r\n<p data-start=\"448\" data-end=\"542\" class=\"\"><strong data-start=\"448\" data-end=\"468\">Express Yourself</strong> – From blues to rock, the guitar lets you create your own unique sound.</p>\r\n</li>\r\n</ul>\r\n<h2 data-start=\"544\" data-end=\"574\" class=\"\"><strong data-start=\"547\" data-end=\"572\">Acoustic vs. Electric</strong></h2>\r\n<ul data-start=\"575\" data-end=\"760\">\r\n<li data-start=\"575\" data-end=\"665\" class=\"\">\r\n<p data-start=\"577\" data-end=\"665\" class=\"\"><strong data-start=\"577\" data-end=\"596\">Acoustic Guitar</strong> – Great for beginners, singer-songwriters, and unplugged sessions.</p>\r\n</li>\r\n<li data-start=\"666\" data-end=\"760\" class=\"\">\r\n<p data-start=\"668\" data-end=\"760\" class=\"\"><strong data-start=\"668\" data-end=\"687\">Electric Guitar</strong> – Ideal for rock, blues, and metal, offering more sound customization.</p>\r\n</li>\r\n</ul>\r\n<h2 data-start=\"762\" data-end=\"789\" class=\"\"><strong data-start=\"765\" data-end=\"787\">Tips for Beginners</strong></h2>\r\n<ol data-start=\"790\" data-end=\"1021\">\r\n<li data-start=\"790\" data-end=\"839\" class=\"\">\r\n<p data-start=\"793\" data-end=\"839\" class=\"\">Start with <strong data-start=\"804\" data-end=\"820\">basic chords</strong> (G, C, D, E, A).</p>\r\n</li>\r\n<li data-start=\"840\" data-end=\"899\" class=\"\">\r\n<p data-start=\"843\" data-end=\"899\" class=\"\">Practice <strong data-start=\"852\" data-end=\"865\">strumming</strong> and <strong data-start=\"870\" data-end=\"890\">finger placement</strong> daily.</p>\r\n</li>\r\n<li data-start=\"900\" data-end=\"959\" class=\"\">\r\n<p data-start=\"903\" data-end=\"959\" class=\"\">Play along with your favorite songs to stay motivated.</p>\r\n</li>\r\n<li data-start=\"960\" data-end=\"1021\" class=\"\">\r\n<p data-start=\"963\" data-end=\"1021\" class=\"\">Don\'t rush—<strong data-start=\"974\" data-end=\"1018\">progress comes with time and consistency</strong>!</p>\r\n</li>\r\n</ol>\r\n<h3 data-start=\"1023\" data-end=\"1047\" class=\"\"><strong data-start=\"1027\" data-end=\"1045\">Final Thoughts</strong></h3>\r\n<p data-start=\"1048\" data-end=\"1207\" class=\"\">Playing the guitar is not just a hobby—it’s a journey of creativity and self-expression. Pick up your guitar, start playing, and enjoy the magic of music! 🎶</p>', 1, '2025-03-25 18:44:25'),
(3, 'Audi: Innovation Meets Performance 🚗🔥', '<p data-start=\"49\" data-end=\"284\" class=\"\">Audi is one of the most prestigious automakers in the world, known for blending <strong data-start=\"129\" data-end=\"168\">luxury, technology, and performance</strong>. Founded in <strong data-start=\"181\" data-end=\"189\">1909</strong>, the German brand has built a reputation for engineering excellence and cutting-edge design.</p>\r\n<h2 data-start=\"286\" data-end=\"319\" class=\"\"><strong data-start=\"289\" data-end=\"317\">What Makes Audi Special?</strong></h2>\r\n<p data-start=\"320\" data-end=\"932\" class=\"\">✅ <strong data-start=\"322\" data-end=\"344\">Quattro AWD System</strong> – Audi’s legendary <strong data-start=\"364\" data-end=\"391\">Quattro all-wheel drive</strong> improves grip and handling, making their cars perform exceptionally in all conditions.<br data-start=\"478\" data-end=\"481\">\r\n✅ <strong data-start=\"483\" data-end=\"508\">Sleek &amp; Modern Design</strong> – From the aggressive <strong data-start=\"531\" data-end=\"542\">Audi R8</strong> to the elegant <strong data-start=\"558\" data-end=\"564\">A8</strong>, Audi cars are known for their futuristic yet timeless looks.<br data-start=\"626\" data-end=\"629\">\r\n✅ <strong data-start=\"631\" data-end=\"654\">Advanced Technology</strong> – Audi is at the forefront of automotive tech with features like <strong data-start=\"720\" data-end=\"787\">Virtual Cockpit, Matrix LED headlights, and AI-assisted driving</strong>.<br data-start=\"788\" data-end=\"791\">\r\n✅ <strong data-start=\"793\" data-end=\"817\">Performance &amp; Luxury</strong> – Whether it\'s the sporty <strong data-start=\"844\" data-end=\"857\">RS models</strong> or the luxurious <strong data-start=\"875\" data-end=\"892\">Q series SUVs</strong>, Audi offers the best of both worlds.</p>\r\n<h2 data-start=\"934\" data-end=\"962\" class=\"\"><strong data-start=\"937\" data-end=\"960\">Popular Audi Models</strong></h2>\r\n<p data-start=\"963\" data-end=\"1368\" class=\"\">🚀 <strong data-start=\"966\" data-end=\"977\">Audi R8</strong> – A supercar with a roaring <strong data-start=\"1006\" data-end=\"1020\">V10 engine</strong>, delivering an exhilarating driving experience.<br data-start=\"1068\" data-end=\"1071\">\r\n🚗 <strong data-start=\"1074\" data-end=\"1090\">Audi A4 &amp; A6</strong> – Perfect for those who want <strong data-start=\"1120\" data-end=\"1139\">premium comfort</strong> with everyday practicality.<br data-start=\"1167\" data-end=\"1170\">\r\n🔥 <strong data-start=\"1173\" data-end=\"1191\">Audi RS Series</strong> – High-performance beasts like the <strong data-start=\"1227\" data-end=\"1242\">RS5 and RS7</strong>, built for speed and power.<br data-start=\"1270\" data-end=\"1273\">\r\n🌱 <strong data-start=\"1276\" data-end=\"1291\">Audi e-tron</strong> – Audi’s electric lineup, leading the way toward a <strong data-start=\"1343\" data-end=\"1365\">sustainable future</strong>.</p>\r\n<h3 data-start=\"1370\" data-end=\"1394\" class=\"\"><strong data-start=\"1374\" data-end=\"1392\">Final Thoughts</strong></h3>\r\n<p data-start=\"1395\" data-end=\"1607\" class=\"\">Audi is more than just a car brand—it’s a statement of <strong data-start=\"1450\" data-end=\"1489\">performance, luxury, and innovation</strong>. Whether you\'re looking for a daily driver or a high-speed thrill machine, Audi has something for every enthusiast.</p>\r\n<p data-start=\"1609\" data-end=\"1661\" class=\"\">Which Audi model is your favorite? Let me know! 🚘💨</p>', 2, '2025-03-25 18:52:03'),
(4, 'Cats: Mysterious, Playful, and Lovable Companions 🐱', '<p data-start=\"62\" data-end=\"307\" class=\"\">Cats have been <strong data-start=\"77\" data-end=\"120\">human companions for thousands of years</strong>, known for their <strong data-start=\"138\" data-end=\"177\">independent yet affectionate nature</strong>. Whether they’re curled up in your lap or zooming around the house at 3 AM, cats always bring joy and curiosity into our lives.</p>\r\n<h2 data-start=\"309\" data-end=\"342\" class=\"\"><strong data-start=\"312\" data-end=\"340\">Why Do People Love Cats?</strong></h2>\r\n<p data-start=\"343\" data-end=\"778\" class=\"\">✅ <strong data-start=\"345\" data-end=\"364\">Low Maintenance</strong> – Unlike dogs, cats don’t need constant attention or daily walks.<br data-start=\"430\" data-end=\"433\">\r\n✅ <strong data-start=\"435\" data-end=\"461\">Playful &amp; Entertaining</strong> – From chasing laser pointers to squeezing into tiny boxes, cats never fail to amuse.<br data-start=\"547\" data-end=\"550\">\r\n✅ <strong data-start=\"552\" data-end=\"585\">Affectionate (on Their Terms)</strong> – While independent, many cats love cuddling and purring beside their owners.<br data-start=\"663\" data-end=\"666\">\r\n✅ <strong data-start=\"668\" data-end=\"685\" data-is-only-node=\"\">Great Hunters</strong> – Even as pets, their natural hunting instincts remain sharp, keeping homes free of pests.</p>\r\n<h2 data-start=\"780\" data-end=\"803\" class=\"\"><strong data-start=\"783\" data-end=\"801\">Fun Cat Facts!</strong></h2>\r\n<p data-start=\"804\" data-end=\"1077\" class=\"\">🐾 Cats sleep <strong data-start=\"818\" data-end=\"839\">12–16 hours a day</strong>—true nap champions!<br data-start=\"859\" data-end=\"862\">\r\n🐾 They can jump up to <strong data-start=\"885\" data-end=\"916\">six times their body length</strong> in one leap.<br data-start=\"929\" data-end=\"932\">\r\n🐾 A cat’s purr isn’t just cute—it can have a <strong data-start=\"978\" data-end=\"1006\">calming effect on humans</strong>.<br data-start=\"1007\" data-end=\"1010\">\r\n🐾 Each cat’s nose print is as <strong data-start=\"1041\" data-end=\"1074\" data-is-only-node=\"\">unique as a human fingerprint</strong>.</p>\r\n<h3 data-start=\"1079\" data-end=\"1103\" class=\"\"><strong data-start=\"1083\" data-end=\"1101\">Final Thoughts</strong></h3>\r\n<p data-start=\"1104\" data-end=\"1339\" class=\"\">Cats are more than just pets; they are <strong data-start=\"1143\" data-end=\"1190\">intelligent, curious, and loving companions</strong> that bring warmth to any home. Whether you’re a cat owner or just an admirer, it’s easy to see why these little felines have won hearts worldwide!</p>\r\n<p data-start=\"1341\" data-end=\"1388\" class=\"\">🐱 <strong data-start=\"1344\" data-end=\"1385\">Do you have a cat? What’s their name?</strong> 😻</p>', 2, '2025-03-25 19:10:46');


INSERT INTO `attachment` (`id`, `path`, `blogId`) VALUES
(1, '/uploads/e35e475d-8d17-4d17-b95f-e5cc11519712.jpg', 1),
(2, '/uploads/f07b52fd-6c13-487b-a2e3-b21e4bb421b1.jpg', 1),
(3, '/uploads/882f2347-2631-4cd1-ab65-0eba1fff4212.png', 2),
(4, '/uploads/f1977fc1-d1af-4aa4-a8c1-00e3e41d9ad2.jpg', 2),
(5, '/uploads/75a0c9f4-5204-4071-9276-e5dd9a282e19.png', 3),
(6, '/uploads/796d1d80-d113-4826-a293-9a89a1d564bc.jpg', 3),
(7, '/uploads/7e55dbef-f55c-4310-91df-8d0f8be1539e.avif', 4),
(8, '/uploads/de56a0e5-c8e8-4819-8842-350a3c418cac.webp', 4),
(9, '/uploads/cc006b04-b98c-4e3f-9558-7fa9db6d3b36.jpg', 4);