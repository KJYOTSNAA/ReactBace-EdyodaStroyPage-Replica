import React from 'react'
import Cards from '../cards/Cards';
import styles from './Product.module.css'
function Product() {
    const blogs = [
        {
            "name": "Introduction to Machine Learning online course",
            "info": "We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a machine learning online course holds. To begin with, one must understand what machine learning ...",
            "images": "https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png",
            "author": "EdYoda",
            "date": "23 Aug 2019"
        },
        {
            "name": "LAMP Stack VS MEAN Stack",
            "info": "In today’s dynamic world, rapid web application development with a smooth user interface that can adapt to specific features is the main business requirement. Many organizationsaround the world that intenselydepend on programmingfor their everyday business",
            "images": "https://edyoda.s3.amazonaws.com/media/blog-images/6.png",
            "author": "EdYoda",
            "date": "24 Aug 2019"
        },
        {
            "name": "Impact of Cloud Computing in various industries",
            "info": "Cloud computing has been rapidly gaining pace in the world of information technology. It has been observed that over 90% of global enterprises are using cloud",
            "images": "https://edyoda.s3.amazonaws.com/media/blog-images/4.png",
            "author": "EdYoda",
            "date": "23 Aug 2019"
        },
        {
            "name": "Challenges of Machine Learning in Big Data Analytics",
            "info": "Machine Learning is a subset of artificial intelligence which is an important part of computer science. The revolution of Big Data promises to transform the way we work, live and",
            "images": "https://edyoda.s3.amazonaws.com/media/blog-images/3.png",
            "author": "EdYoda",
            "date": "24 Aug 2019"
        },
        {
            "name": "Breaking the Myths around Cybersecurity",
            "info": "As the dependency on online platforms is increasing daily, cybersecurity is becoming an important concern for all companies today. The number of cyberattacks is ever-rising even after adopting every security measure possible by businesses. Cyber attackers",
            "images": "https://edyoda.s3.amazonaws.com/media/blog-images/5.png",
            "author": "EdYoda",
            "date": "26 Aug 2019"
        },
        {
            "name": "Importance of Data Backup...",
            "info": "A business must always introspect the areas where they lack in order to bring about a positive change in the work environment. One of the main precautions or a contingency plan that",
            "images": "https://edyoda.s3.amazonaws.com/media/blog-images/7.png",
            "author": "EdYoda",
            "date": ">23 Aug 2019"
        },
        {
            "name": "What is Web Scraping?",
            "info": "Simply put, web scraping is one of the tools developers use to gather and analyze information from the Internet. Some websites and platforms offer application programming interfaces (APIs) which we can use to access information<",
            "images": "https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png",
            "author": "Zac Clancy",
            "date": "25 Sep 2019"
        },
        {
            "name": "What is Income Share Agreement?",
            "info": "The term Income Share Agreement has been around for a long time since 1955 to be precise. Surprised, eh? It was first introduced by Milton Friedman, an American economist,",
            "images": "https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png",
            "author": "EdYoda",
            "date": "14 Oct 2019"
        },
        {
            "name": "Practical Machine Learning with Python and Keras",
            "info": "Machine learning is a field of artificial intelligence that uses statistical  techniques to give computer systems the ability to “learn” (e.g., progressively improve performance on a specific...",
            "images": "https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png",
            "author": "Daniel Pyrathon",
            "date": "16 Oct 2019"
        }
    ];
    return (
        <div>
            <div className={styles.CategoriesContainer}>
                <h2 className={styles.Heading}>Trending Posts</h2>
                <p className={styles.FilterText}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII=" alt="" /> filter by Category</p>
                <div>
                    <button className={styles.Categories}>All</button>
                    <button className={styles.Categories}>Artificial intelligence</button>
                    <button className={styles.Categories}>Cloud Computing</button>
                    <button className={styles.Categories}>DevOps</button>
                    <button className={styles.Categories}>Programing Languages</button>
                    <button className={styles.Categories}>Mobile Aplication Development</button>
                    <button className={styles.Categories}>Technology and Tools</button>
                    <button className={styles.Categories}>Get Job ina Tech Company</button>
                    <button className={styles.Categories}>Others</button>
                </div>

            </div>

            <div className={styles.container}>
                {
                    blogs.map(blog => <Cards blog={blog} />)
                }
            </div>


        </div>
    )
}

export default Product