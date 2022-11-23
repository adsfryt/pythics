import React, {Component, useEffect, useRef} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";

import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";
import TaskFC from "../TaskFC";
import TaskFCNA from "../TaskFCNA";
import TaskNC from "../TaskNC";


const SumForce =()=>{

    var name = "SumForce";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }

    return (
        <div className="qw">
            <h1 className="titletxt">Сложение двух сил
            </h1>
            <div className="centercontent">
                <p className="txt">В большинстве случаев, с которыми мы встречаемся в жизни, на тело действует не одна,
                    а сразу несколько сил. Так, например, на парашютиста, спускающегося на землю, действуют сила
                    тяжести и сила сопротивления воздуха.
                </p>
                <p className="txt">В подобном случае можно заменить несколько сил, в действительности приложенных к
                    телу, одной силой, равноценной по своему действию этим силам.</p>
                <p className="txtb">Сила, которая производит на тело такое же действие, как несколько одновременно
                    действующих сил, называется равнодействующей этих сил.
                </p>
                <p className="utitletxt">Правила сложения сил</p>
                <p className="txt">Само сложение пары сил отличается от простого арифметического сложения.</p>
                {/*<MathComponent texExpression={`\\int_0^\\infty x^2 dx`} a ={8}/>*/}
                <p className="txt">В первую очередь, надо убедиться, что силы приложены к одной точке. Силы, приложенные к разным точкам складывать <mark className="mrk">нельзя</mark>.
                </p>
                <p className="txt">Во-вторых, необходимо учесть, что сила – величина векторная, а значит, для сложения
                    двух сил необходимо пользоваться не обычным арифметическим сложением, а сложением по <mark className="mrk">векторным
                        правилам</mark>. Для сложения сил необходимо найти их проекции на оси системы координат, сложить эти
                    проекции, а потом по проекциям найти результирующую силу.</p>
                img(шероховатость)
                <p className="txt">В простейшем случае, когда координатная ось одна – модули проекций равны модулям
                    самих сил, и их знак совпадает с их направлением. В результате, равнодействующая сил, направленных
                    в одну сторону, направлена в ту же сторону, а ее модуль равен сумме модулей сил. Если силы направлены
                    в разные стороны, равнодействующая их будет направлена в сторону большей по модулю силы, а ее модуль
                    будет равен разности модулей большей и меньшей силы.</p>
                img(если силы в одну сторону направленны)
                <p className="txtb">
                Если координатных осей две или три – необходимо определять проекции на все оси, складывать или вычитать
                их, в зависимости от направления, а затем, по полученным суммам определять модуль и направление равнодействующей.
                </p>
                <p className="txt">Для двух координатных осей при сложении сил нередко удобно использовать правила
                    <mark className="mrk">параллелограмма или треугольника</mark> – это приводит к нахождению равнодействующей быстрее.</p>
                img(правила параллеолграмма)
            </div>
            {/*<a href={require('../15.jpg')} >fffffffffffffff</a>*/}
            <App1 name={name}/>
        </div>
    );

};

export default SumForce;