import logo from "../jewerly pictures/logo.png"
import { useNavigate } from "react-router-dom"
export default function About() {
    const navigate = useNavigate()
    return (<>
        <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-mine">
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                    <a class="nav-link bt" onClick={() => navigate("/")}><img id="logo" src={logo}></img></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link bt" onClick={() => navigate("/About")} >About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link bt" onClick={() => navigate("/")}>Shop</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link bt" onClick={() => navigate("/Cart")}>Cart</a>
                    </li>
                </ul>
            </div>
        </nav>
        <p class="title">ABOUT PANDORA</p>
        <div class="longtext"><p>
        
Pandora designs, manufactures and markets hand-finished and contemporary jewellery made from high-quality materials at affordable prices. Pandora jewellery is sold in more than 100 countries on six continents through around 7,800 points of sale, including more than 2,400 concept stores.<br></br>
Founded in 1982 and headquartered in Copenhagen, Denmark, Pandora employs more than 27,300 people worldwide of whom around 13,200 are located in Thailand, where the Company manufactures its jewellery. Pandora is publicly listed on the Nasdaq Copenhagen stock exchange in Denmark.<br></br>In 2017, Pandora’s total revenue was DKK 22.8 billion (approximately EUR 3.1 billion). For more information, please visit www.pandoragroup.com.
</p><p>THE PANDORA STORY<br></br>
The Pandora story is about a company with a distinctive brand and distinctive products that in just a few years has made the exceptional journey from a local Danish jeweler to a world-leading international jewelry company, <br></br>with sales in more than 70 countries.
1982-1999: The early years<br></br>
It all started nearly 30 years ago. Back in 1982 a jeweller’s shop that would one day become Pandora was established in modest surroundings in Copenhagen,<br></br> Denmark, by Danish goldsmith Per Enevoldsen and his wife Winnie.<br></br>
From the beginning, they often travelled to Thailand in search of jewelry for importing. As the demand for their products increased, their focus gradually shifted towards wholesale to clients in Denmark.<br></br>
In 1987, after several successful years as wholesalers, the retail activities were discontinued and the company moved to larger premises.<br></br> Meanwhile, the first in-house designer joined the company and Pandora began to focus on creating its own unique jewelry. In 1989, the company decided to start manufacturing its jewelry in Thailand.
2000-2009: Building an international presence<br></br>
In 2000, Pandora’s charm bracelet concept was first launched in the Danish market.<br></br>Consumers embraced the concept, and in the following years, driven by a growing and encouraging demand, the company began to expand internationally, entering new markets such as the United States in 2003 and Germany and Australia in 2004.
Over the following years, Pandora rapidly expanded its market presence from a Scandinavian platform to an <br></br>international marketing and sales platform driven mainly by third party distributors and strong production capabilities in Thailand.<br></br>
In order to increase its production capacity, Pandora opened a large scale, six-story fully-owned manufacturing facility in Thailand in 2005, which still forms a central part of the current production and infrastructure. <br></br>In August 2008 a second manufacturing facility was opened in the same area, which in 2010 was followed by the opening of Pandora’s third and fourth facilities in the same area, further strengthening our unique production setup.
Today<br></br>
Pandora operates and manages a vertically integrated business model from in-house design and manufacturing to global marketing and direct distribution in most markets.<br></br> The products are sold in more than 70 countries on six continents through over 10,300 points of sale, including around 900 concept stores.<br></br>
Pandora’s mission – then and today – is to offer women across the world a universe of high quality, <br></br>hand-finished, modern and genuine jewelry products at affordable prices, thereby inspiring women to express their individuality. All women have their individual stories to tell – a personal collection of special moments that makes them who they are. That is why we celebrate these moments. That is why we say these moments are unforgettable. Like the story of Pandora.
        </p></div>
        <button class="b btn btn-outline-dark" onClick={() =>
            navigate("/StoreItems")}>see products</button>
    </>)
}