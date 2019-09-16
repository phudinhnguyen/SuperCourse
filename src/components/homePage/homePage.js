import React, { Component } from 'react'
import '../../assets/css/style.css'
import Header from '../layout/header';
import Footer from '../layout/footer';
import Carousel from './carousel/carousel';
import CourseShow from './courseShow/courseShow';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <CourseShow />
                <Footer />
            </div>
        )
    }
}
