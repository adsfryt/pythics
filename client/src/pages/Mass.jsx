import React, {Component, useEffect, useRef} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";

import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";
import TaskFC from "../TaskFC";
import TaskFCNA from "../TaskFCNA";
import TaskNC from "../TaskNC";


const Mass =()=>{

    var name = "Mass";
    var i = [];
    for (var a = 0; a < 2;a++){
    i[a] = a;
}

        return (
            <div className="qw">
                <h1 className="titletxt">Масса и плотность тела</h1>
                <div className="centercontent">
                    <p className="utitletxt">Масса</p>
                    <p className="txt">При взаимодействии двух тел скорости первого и второго тела могут измениться.
                    </p>
                    <p className="txt">Одно тело после взаимодействия приобретает скорость, которая может значительно
                        отличаться от скорости другого тела. Например, после выстрела из лука скорость стрелы гораздо
                        больше скорости, которую приобретает тетива лука после взаимодействия.</p>
                    <p className="txt">Сравнивая, как меняются скорости взаимодействующих тел за определённый
                        промежуток времени, можно судить об их массах.
                    </p>
                    {/*<MathComponent texExpression={`\\int_0^\\infty x^2 dx`} a ={8}/>*/}
                    <p className="txt">Тележка, движущаяся с меньшей скоростью, обладает большей массой, а тележка,
                        имеющая большую скорость, обладает меньшей массой.
                    </p>
                    img(пример с тележкой)
                    <p className="txt">Скорости, которые приобрели тележки в результате взаимодействия, можно
                        измерить. По этим скоростям сравнивают массы взаимодействующих тележек.</p>
                    <p className="txt">Например, скорости тележек до взаимодействия равны нулю. После взаимодействия
                        скорость одной тележки стала равна 10 м/с, а скорость другой 20 м/с . Поскольку скорость,
                        которую приобрела вторая тележка, в 2 раза больше скорости первой, то и её масса в 2 раза
                        меньше массы первой тележки.</p>
                    <p className="txt">Чем меньше меняется скорость тела при взаимодействии, тем большую массу
                        оно имеет. Такое тело называют более <mark className="mrk">инертным</mark>.</p>
                    <p className="txt">Чем больше меняется скорость тела при взаимодействии, тем меньшую массу оно имеет. Это тело менее инертно.</p>
                    <p className="txtb">Масса тела — это физическая величина, которая является мерой инертности тела.</p>
                    <p className="txt">Массу обозначают буквой m.</p>
                    <p className="txt">За единицу массы в СИ принят килограмм (1 кг).</p>
                    <p className="txt">На практике используют и другие единицы массы: <mark className="mrk">тонна</mark> (т), <mark className="mrk">грамм</mark> (г), <mark className="mrk">миллиграмм</mark> (мг).</p>
                    <p className="utitletxt">Плотность</p>
                    <p className="txt">Масса любого тела зависит не только от его размеров, но и от того, из какого вещества
                        это тело состоит. При этом тела, имеющие <mark className="mrk">равные объёмы</mark>, но изготовленные
                        из <mark className="mrk">разных веществ</mark>, имеют <mark className="mrk">разные массы</mark>.
                    </p>
                    img(пример выше)
                    <p className="txt">В то же время тела с <mark className="mrk">равными массами</mark>, изготовленные
                        из <mark className="mrk">разных веществ</mark>, имеют <mark className="mrk">разные объёмы</mark>.</p>
                    <p className="txt">Так, железный брус массой 1 т занимает объём 0,13 м<sup>3</sup>, а лёд массой 1т — объём 1,1 м<sup>3</sup>.
                    </p>
                    <p className="txt">Отсюда следует, что тела объёмом 1 м<sup>3</sup> каждое, изготовленные из <mark className="mrk">разных веществ</mark>, имеют
                        разные массы. Так, алюминий объёмом 1 м<sup>3</sup> имеет массу 2700 кг, свинец такого же объёма (1 м<sup>3</sup>)
                        имеет массу 11 300 кг.</p>
                    <p className="txtb">Плотность показывает, чему равна масса вещества, взятого в объёме 1 м<sup>3</sup>.
                    </p>
                    <TaskNC EI={"кг/м3"} R={"Известно, что мрамор объёмом 2 м3 имеет массу 5400 кг. Следовательно, 1 м3 мрамора будет иметь массу в 2 раза меньшую, т. е. 5400 : 2 = 2700 кг. Таким образом, плотность мрамора будет равна 2700 кг на 1 м3."} O={"2700"} Y={"Мраморная плита имеет объём 2 м3, а её масса равна 5400 кг. Определите плотность мрамора."}  ide={name + i[0]}/>
                    {/*<MathComponent texExpression={`\\int_0^\\infty x^2 dx`} a ={8}/>*/}
                    <p className="txtb">Плотность — это физическая величина, которая равна отношению массы тела к его объёму.</p>
                    <p className="txt">Обозначим величины, входящие в это выражение, буквами: плотность вещества — <mark className="mrk">ρ</mark> (греч. буква «ро»), масса тела — <mark className="mrk">m</mark>, его объём — <mark className="mrk">V</mark>.</p>
                    <MathComponent texExpression={`\\rho = \\frac{m}{v}`}/>
                    <p className="txt">Единицей плотности вещества в СИ является килограмм на кубический метр</p>
                    <p className="utitletxt">Задачи:</p>
                    <TaskFCNA EI={"кг/м3"}
                              O={"120"} Y={"Самое лёгкое дерево- бальза. Масса.Масса древесины этого дерева равна 12г при объёме 100 см3. Определите плотность древесины"}  ide={name + i[0]}/>
                </div>
                {/*<a href={require('../15.jpg')} >fffffffffffffff</a>*/}
                <App1 name={name}/>
            </div>
        );

};

export default Mass;