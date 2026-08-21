import React from "react";
import { Canvas } from "@react-three/fiber";
import {
    OrbitControls,
    Text,
    Environment,
    ContactShadows
} from "@react-three/drei";

import "./ExamHall3D.css";


/* =====================================================
   STUDENT SEAT
===================================================== */

function StudentSeat({
    row,
    seat,
    x,
    z,
    isMySeat
}) {

    return (

        <group position={[x, 0, z]}>

            {/* Seat Base */}

            <mesh position={[0, 0.65, 0]}>
                <boxGeometry args={[1.4, 0.18, 1.1]} />

                <meshStandardMaterial
                    color={isMySeat ? "#00ffff" : "#263238"}
                    metalness={0.5}
                    roughness={0.3}
                    emissive={isMySeat ? "#00ffff" : "#000000"}
                    emissiveIntensity={isMySeat ? 2 : 0}
                />
            </mesh>


            {/* Seat Back */}

            <mesh position={[0, 1.25, 0.45]}>

                <boxGeometry
                    args={[1.4, 1.2, 0.18]}
                />

                <meshStandardMaterial
                    color={isMySeat ? "#00ffff" : "#37474f"}
                    metalness={0.4}
                    roughness={0.35}
                    emissive={isMySeat ? "#00ffff" : "#000000"}
                    emissiveIntensity={isMySeat ? 2 : 0}
                />

            </mesh>


            {/* Left Leg */}

            <mesh position={[-0.5, 0.3, 0]}>
                <boxGeometry args={[0.12, 0.6, 0.12]} />

                <meshStandardMaterial color="#111820" />
            </mesh>


            {/* Right Leg */}

            <mesh position={[0.5, 0.3, 0]}>
                <boxGeometry args={[0.12, 0.6, 0.12]} />

                <meshStandardMaterial color="#111820" />
            </mesh>


            {/* Seat Number */}

            <Text
                position={[0, 1.9, 0]}
                fontSize={0.22}
                color={isMySeat ? "#00ffff" : "#ffffff"}
                anchorX="center"
                anchorY="middle"
            >

                {isMySeat
                    ? "★ YOU"
                    : `${row}-${seat}`}

            </Text>


            {/* YOUR SEAT GLOW */}

            {isMySeat && (

                <pointLight
                    position={[0, 1.5, 0]}
                    intensity={4}
                    distance={4}
                    color="#00ffff"
                />

            )}

        </group>

    );
}



/* =====================================================
   STUDENT BENCH
===================================================== */

function Bench({
    row,
    bench,
    x,
    z,
    myRow,
    mySeat
}) {

    const leftSeat = (bench * 2) - 1;
    const rightSeat = bench * 2;

    return (

        <group>

            {/* Table */}

            <mesh
                position={[x, 1.15, z - 0.9]}
            >

                <boxGeometry
                    args={[3.2, 0.18, 0.8]}
                />

                <meshStandardMaterial
                    color="#18242b"
                    metalness={0.5}
                    roughness={0.3}
                />

            </mesh>


            {/* Table front */}

            <mesh
                position={[x, 0.75, z - 0.9]}
            >

                <boxGeometry
                    args={[3.2, 0.7, 0.12]}
                />

                <meshStandardMaterial
                    color="#101820"
                />

            </mesh>


            {/* Left Student */}

            <StudentSeat
                row={row}
                seat={leftSeat}
                x={x - 0.85}
                z={z}
                isMySeat={
                    row === myRow &&
                    leftSeat === mySeat
                }
            />


            {/* Right Student */}

            <StudentSeat
                row={row}
                seat={rightSeat}
                x={x + 0.85}
                z={z}
                isMySeat={
                    row === myRow &&
                    rightSeat === mySeat
                }
            />

        </group>

    );
}



/* =====================================================
   EXAM HALL
===================================================== */

function ExamHall() {

    /*
       CURRENT STUDENT SEAT

       Row 4
       Seat 3

       Later this will come from MySQL.
    */

    const myRow = 4;
    const mySeat = 3;


    const rows = 5;
    const benchesPerRow = 3;


    return (

        <group>


            {/* =================================================
                FLOOR
            ================================================= */}

            <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -0.15, 0]}
            >

                <planeGeometry
                    args={[18, 18]}
                />

                <meshStandardMaterial
                    color="#05080c"
                    metalness={0.2}
                    roughness={0.7}
                />

            </mesh>



            {/* FLOOR GRID */}

            <gridHelper
                args={[18, 18, "#00ffff", "#102027"]}
                position={[0, -0.13, 0]}
            />



            {/* =================================================
                BACK WALL
            ================================================= */}

            <mesh
                position={[0, 4, -7]}
            >

                <boxGeometry
                    args={[18, 8, 0.3]}
                />

                <meshStandardMaterial
                    color="#071017"
                    metalness={0.3}
                    roughness={0.6}
                />

            </mesh>



            {/* =================================================
                LEFT WALL
            ================================================= */}

            <mesh
                position={[-9, 4, 0]}
            >

                <boxGeometry
                    args={[0.3, 8, 14]}
                />

                <meshStandardMaterial
                    color="#071017"
                />

            </mesh>



            {/* =================================================
                RIGHT WALL
            ================================================= */}

            <mesh
                position={[9, 4, 0]}
            >

                <boxGeometry
                    args={[0.3, 8, 14]}
                />

                <meshStandardMaterial
                    color="#071017"
                />

            </mesh>



            {/* =================================================
                FRONT BOARD
            ================================================= */}

            <mesh
                position={[0, 4.8, -6.75]}
            >

                <boxGeometry
                    args={[10, 2.2, 0.15]}
                />

                <meshStandardMaterial
                    color="#020506"
                    emissive="#001a1f"
                    emissiveIntensity={0.5}
                />

            </mesh>


            {/* BOARD TEXT */}

            <Text
                position={[0, 5, -6.62]}
                fontSize={0.65}
                color="#00ffff"
                anchorX="center"
            >

                END SEMESTER EXAMINATION

            </Text>



            {/* =================================================
                HALL TITLE
            ================================================= */}

            <Text
                position={[0, 6.6, -6.5]}
                fontSize={0.45}
                color="#ffffff"
                anchorX="center"
            >

                MAIN EXAMINATION HALL • ROOM 204

            </Text>



            {/* =================================================
                BENCHES + STUDENTS
            ================================================= */}

            {Array.from({ length: rows }).map(
                (_, rowIndex) => {

                    const row = rowIndex + 1;

                    return Array.from({
                        length: benchesPerRow
                    }).map(
                        (_, benchIndex) => {

                            const x =
                                (benchIndex - 1) * 4;

                            const z =
                                rowIndex * 2.5 - 4.5;

                            return (

                                <Bench
                                    key={`${row}-${benchIndex}`}
                                    row={row}
                                    bench={benchIndex + 1}
                                    x={x}
                                    z={z}
                                    myRow={myRow}
                                    mySeat={mySeat}
                                />

                            );

                        }
                    );

                }
            )}



            {/* =================================================
                STAFF TABLE
            ================================================= */}

            <mesh
                position={[0, 0.9, 6]}
            >

                <boxGeometry
                    args={[6, 1.2, 1.5]}
                />

                <meshStandardMaterial
                    color="#18242b"
                    metalness={0.5}
                    roughness={0.3}
                />

            </mesh>



            <Text
                position={[0, 1.7, 6]}
                fontSize={0.4}
                color="#00ffff"
                anchorX="center"
            >

                STAFF DESK

            </Text>



            {/* =================================================
                ENTRANCE
            ================================================= */}

            <mesh
                position={[7, 1.8, -6.8]}
            >

                <boxGeometry
                    args={[2.5, 3.6, 0.2]}
                />

                <meshStandardMaterial
                    color="#101820"
                    emissive="#002c32"
                    emissiveIntensity={0.8}
                />

            </mesh>


            <Text
                position={[7, 3.8, -6.6]}
                fontSize={0.35}
                color="#00ffff"
                anchorX="center"
            >

                ENTRANCE

            </Text>


            {/* =================================================
                CEILING LIGHTS
            ================================================= */}

            {[-5, 0, 5].map((x) => (

                <group key={x}>

                    <mesh
                        position={[x, 7, -2]}
                    >

                        <boxGeometry
                            args={[3, 0.1, 0.3]}
                        />

                        <meshStandardMaterial
                            color="#00ffff"
                            emissive="#00ffff"
                            emissiveIntensity={3}
                        />

                    </mesh>


                    <pointLight
                        position={[x, 6, -2]}
                        intensity={8}
                        distance={8}
                        color="#00ffff"
                    />

                </group>

            ))}


            {/* =================================================
                YOUR SEAT MARKER
            ================================================= */}

            <Text
                position={[5.8, 3.5, 2.2]}
                fontSize={0.35}
                color="#00ffff"
                anchorX="center"
            >

                ⭐ YOUR SEAT

            </Text>

        </group>

    );
}



/* =====================================================
   MAIN COMPONENT
===================================================== */

export default function ExamHall3D() {

    return (

        <div className="exam-hall-3d">

            <Canvas
                camera={{
                    position: [13, 11, 16],
                    fov: 50
                }}
                shadows
            >


                {/* LIGHTING */}

                <ambientLight
                    intensity={0.4}
                />


                <directionalLight
                    position={[5, 10, 5]}
                    intensity={2}
                    castShadow
                />


                <pointLight
                    position={[0, 5, 0]}
                    intensity={5}
                    color="#00ffff"
                />


                {/* ENVIRONMENT */}

                <Environment
                    preset="night"
                />


                {/* HALL */}

                <ExamHall />


                {/* FLOOR SHADOW */}

                <ContactShadows
                    position={[0, -0.14, 0]}
                    opacity={0.5}
                    scale={18}
                    blur={2}
                />


                {/* CAMERA */}

                <OrbitControls

                    enablePan={false}

                    minDistance={10}

                    maxDistance={30}

                    maxPolarAngle={Math.PI / 2.1}

                />

            </Canvas>

        </div>

    );

}