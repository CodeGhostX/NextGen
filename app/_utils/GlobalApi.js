import {gql, request} from "graphql-request";
const MASTER_URL = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/"+ process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+"/master"

const getCourseList = async ()=>{
    const query = gql`
    query MyQuery{
        courseLists(first:25){
            author
            name
            id
            free
            description
            demoUrl
            banner{
                url
            }
            chapter{
                ... on Chapter {
                        id
                        name
                        video {
                            url
                        }
                }
            }
            demoUrl
            description
            free
            id
            name
            slug
            totalChapters
            sourceCode
            tag
        }
    }
    `
    const result = await request(MASTER_URL, query);
    return result;
}

const getCourseById = async (courseId)=>{
    const query = gql`
    query MyQuery{
        courseLists(where : {slug: "`+courseId+`"}){
            author
            name
            id
            free
            description
            demoUrl
            banner{
                url
            }
            chapter{
                ... on Chapter {
                        id
                        name
                        video {
                            url
                        }
                }
            }
            demoUrl
            description
            free
            id
            name
            slug
            totalChapters
            sourceCode
            tag
        }
    }
    `
    const result = await request(MASTER_URL, query);
    return result;
}

const enrollToTheCourse = async (courseId, email)=>{
    const query = gql`
    mutation MyMutation{
        createUserEnrollCourse(
            data:{courseId: "`+courseId+`", userEmail: "`+email+`", courseList: {connect: {slug : "`+courseId+`"}}}
        ){
            id
        }
        publishManyUserEnrollCoursesConnection {
            edges {
            node {
                id
            }
            }
        }
    }
    `
    const result = await request(MASTER_URL, query);
    return result;
}

export default{
    getCourseList,
    getCourseById,
    enrollToTheCourse
}