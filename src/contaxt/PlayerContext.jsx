import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekbg = useRef();
    const seekcolor = useRef()
    const [value, setValue] = useState('')
    const [track, setTrack] = useState(songsData[0]);
    const [playstatus, setplaystatus] = useState(false)
    const [filteredSongs, setFilteredSongs] = useState([]);
    const [width, setwidth] = useState(true)
    const musicPlayer = useRef()
    const [time, settime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    })
    const [duration, setduration] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    })

    const playWithId = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setplaystatus(true)
    }
    const play = () => {
        audioRef.current.play();
        setplaystatus(true)
    }
    const pause = () => {
        audioRef.current.pause();
        setplaystatus(false)
    }
    const prev = async () => {
        if (track.id > 0) {
            await setTrack(songsData[track.id - 1]);
            await audioRef.current.play();
            setplaystatus(true)
        }
    }
    const next = async () => {
        if (track.id < songsData.length - 1) {
            await setTrack(songsData[track.id + 1]);
            await audioRef.current.play();
            setplaystatus(true);
        }
    };
    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekcolor.current.style.width = Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100) + '%'
                settime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        }, 1000)
    })
    const seekSong = (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekbg.current.offsetWidth) * audioRef.current.duration);
        audioRef.current.play();
        setplaystatus(true)
    }
    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        const filtered = songsData.filter(obj => obj.name.toLowerCase().startsWith(newValue.toLowerCase()));
        setFilteredSongs(filtered);
    };
    const musicWidth = ()=>{
        musicPlayer.current.style.width = 0;
        setwidth(true)
    }
    const contextValue = {
        audioRef,
        track,
        setTrack,
        playstatus, setplaystatus,
        playWithId,
        play,
        pause,
        prev,
        next,
        seekbg, seekcolor,
        time, settime,
        duration, setduration,
        seekSong,
        handleInputChange,
        filteredSongs, setFilteredSongs,
        value, setValue,
        musicPlayer,
        musicWidth,
        width,setwidth
    };
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;
