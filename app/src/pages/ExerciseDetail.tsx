import React, { useState, } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ReactElement } from "react";

// Components
import DropZoneComponent from "../components/Exercise/dropZone";
import AnswerCards from "../components/Exercise/AnswerCards";

import { Answer } from "../interfaces/Answer";

// Helpers
import { Exercise } from "../interfaces/Exercise"
import ExerciseServices from "../services/exercise.services";

// Auth
import useAuthStore from "../contexts/useAuthStore";

// Video Player
import ReactPlayer from "react-player";

export const ExerciseDetail = ({ exercise, eid }: { exercise: Exercise, eid: string }) => {

    const [contentUrl, setContentUrl] = useState("");
    const [answers, setAnswers] = useState<Answer[]>(exercise.answers);

    console.log("logg answers");
    
    console.log(answers);
    
    const { register, handleSubmit: handleExerciseSave, formState: { errors } } = useForm();
    const onExerciseSave: SubmitHandler<any> = data => saveExercise(data);

    const token = useAuthStore(state => state.token);

    const saveExercise = (data: any) => {

<<<<<<< HEAD
        const exerciseToSave: Exercise = {
            id: exercise.id,
            sectionId: exercise.sectionId || "no sectionId",
            title: data.title,
            description: data.description,
            exerciseNumber: exercise.exerciseNumber,
            content: contentUrl,
            onWrongFeedback: "NOT IMPLEMENTED",
            answers: answers
        }

        ExerciseServices.saveExercise(exerciseToSave, token)
=======
        console.log("logging DATA");
        
        console.log(data);
        try {

            if (answers.length === 0) {
                throw Error("Cannot save exercise when answers is empty. Set 2-4 answers, please")
            }
            
            const exerciseToSave: Exercise = {
                id: exercise.id,
                sectionId: exercise.sectionId || "",
                title: data.title,
                description: data.description,
                exerciseNumber: exercise.exerciseNumber,
                content: contentUrl,
                onWrongFeedback: "NOT IMPLEMENTED",
                answers: answers
            }
            
            ExerciseServices.saveExercise(exerciseToSave, token)
>>>>>>> 4b3706f7a0ccf1a551ca2ad770b7ff16c3dd52f5
            .then(() => alert("Saved"))
            .catch((e) => alert("Failed to save exercise due to error: " + e));
        }
        catch (err) {
            console.error(err)
        }

    }

    return (

        <form onSubmit={handleExerciseSave(onExerciseSave)}
            className="flex flex-col space-y-6 divide"
        >
            <div className="flex flex-col form-control align-items justify-content w-full">
                <label className="label">
                    <span className="label-text">Exercise title</span>
                </label>
                <input
                    type="text"
                    defaultValue={exercise.title}
                    placeholder="Exercise title goes here"
                    className="input input-bordered w-full max-w-xs"
                    {...register("title", { required: true })}
                />

                <label className="label">
                    <span className="label-text">Exercise description</span>
                </label>
                <textarea
                    className="textarea textarea-bordered h-24"
                    defaultValue={exercise.description}
                    placeholder="Here you can describe the exercise"
                    {...register("description", { required: true })}
                ></textarea>

            </div>

            <div>
                {exercise.content ?
                    <h1 className='text-md font-medium mt-2'>Content video</h1> :
                    <h1 className='text-md font-medium mt-2'>Content video not uploaded</h1>
                }
                <ReactPlayer url={exercise.content || "https://www.youtube.com/watch?v=KuXjwB4LzSA"} controls={true} light={true} />
            </div>

            <DropZoneComponent update={setContentUrl} props={{ exerciseId: eid }} />
            <h1 className='text-md font-medium mb-2'>Answers</h1>
            <AnswerCards update={setAnswers} initialAnswers={answers} />

            <button type='submit' className="std-button ml-auto py-2 px-4">Save Exercise</button>
        </form>
    );
};

export default ExerciseDetail;
