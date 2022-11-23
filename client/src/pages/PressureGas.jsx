import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";

const PressureGas = () => {
    // async function download(Src) {
    //     const image = await fetch(Src)
    //     const imageBlog = await image.blob()
    //     const imageURL = URL.createObjectURL(imageBlog)
    //
    //     const link = document.createElement('a')
    //     link.href = imageURL
    //     link.download = 'image.jpg'
    //     document.body.appendChild(link)
    //     link.click()
    //     document.body.removeChild(link)
    // }
    var name = "PressureGas";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Давление газа</h1>
            <div className="centercontent">
                <p className="txt">Мы уже знаем, что газы, в отличие от твёрдых тел и жидкостей, заполняют весь сосуд, в котором они
                    находятся. Например, стальной баллон для хранения газов, камера автомобильной шины или волейбольный мяч. При этом
                    газ оказывает давление на стенки, дно и крышку баллона, камеры или любого другого тела, в котором он находится.
                    Давление газа обусловлено иными причинами, чем давление твёрдого тела на опору.</p>
                <p className="txt">Известно, что молекулы газа беспорядочно движутся. При своём движении они сталкиваются друг с другом,
                    а также со стенками сосуда, в котором находится газ. Хотя сила удара отдельной молекулы мала, но действие всех молекул на
                    стенки сосуда значительно, оно и создаёт давление газа.</p>
                <p className="txtb">Итак, давление газа на стенки сосуда (и на помещённое в газ тело) вызывается ударами молекул газа.</p>
                <p className="txt">Попытаемся уменьшить объём газа, но так, чтобы масса его осталась неизменной. Это значит, что в каждом кубическом
                    сантиметре газа молекул станет больше, плотность газа увеличится. Тогда число ударов молекул о стенки сосуда возрастёт, т. е. возрастёт давление газа. И нооборот, если
                    плотность газа уменьшится, то число ударов молекул о стенки сосуда уменьшится.</p>
                <p className="txtb">Поэтому, при уменьшении объёма газа его давление увеличивается, а при увеличении объёма давление уменьшается
                    при условии, что масса и температура газа остаются неизменными.
                </p>
                <p className="txt">А как изменится давление газа, если нагреть его при постоянном объёме? Известно, что скорость движения
                    молекул газа при нагревании увеличивается. Двигаясь быстрее, молекулы будут ударять о стенки сосуда чаще.</p>
                <p  className="txt">Следовательно, <mark className="mrk">давление газа в закрытом сосуде тем больше, чем выше температура газа</mark>, при условии, что масса газа и объём не изменяются.</p>
                <p  className="txt">Из этих опытов можно сделать общий вывод, что давление газа тем больше, чем чаще и сильнее молекулы ударяют о стенки сосуда.</p>
                </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default PressureGas;