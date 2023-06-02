import React, { useState, useEffect } from "react";

import type { VideoContainerFormat, VideoContainerFormatValue } from "../../utilis/constants";
import {
  videoContainerFormats,
  containerEncodingMap,
  videoResolutions,
  videoFrameRates,
  audioContentOptions,
  audioSampleRates,
} from "../../utilis/constants";

const Custom = () => {
  const [videoContainerFormat, setVideoContainerFormat] =
    useState<VideoContainerFormatValue>("mp4");
  const [videoCodecList, setVideoCodecList] = useState(containerEncodingMap["mp4"].videoCodecs);
  const [videoCodec, setVideoCodec] = useState(containerEncodingMap["mp4"].videoCodecs[0].value);
  const [audioCodecList, setAudioCodecList] = useState(containerEncodingMap["mp4"].audioCodecs);
  const [audioCodec, setAudioCodec] = useState(containerEncodingMap["mp4"].audioCodecs[0].value);
  const [audioContent, setAudioContent] = useState(audioContentOptions[0].value);
  const [videoResolution, setVideoResolution] = useState(videoResolutions[0].value);
  const [videoFrameRate, setVideoFrameRate] = useState(videoFrameRates[0].value);
  const [audioSampleRate, setAudioSampleRate] = useState(audioSampleRates[0].value);
  const [duration, setDuration] = useState(5);

  useEffect(() => {
    setVideoCodecList(containerEncodingMap[videoContainerFormat].videoCodecs);
    setVideoCodec(containerEncodingMap[videoContainerFormat].videoCodecs[0].value);
    setAudioCodecList(containerEncodingMap[videoContainerFormat].audioCodecs);
    setAudioCodec(containerEncodingMap[videoContainerFormat].audioCodecs[0].value);
  }, [videoContainerFormat]);

  return (
    <div className="m-8 card w-11/12 bg-base-100 shadow-xl">
      <div className="m-8">
        <div className="tabs">
          <div className="tab tab-lg tab-lifted tab-active">Video</div>
          <div className="tab tab-lg tab-lifted">Audio</div>
          <div className="tab tab-lg tab-lifted"></div>
        </div>
        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Video Container Format</span>
            </label>
            <select className="select select-bordered select-normal w-full max-w-xs">
              {videoContainerFormats.map((format: VideoContainerFormat) => (
                <option key={format.value} value={format.value}>
                  {format.label}
                </option>
              ))}
            </select>
            <label className="label">
              <span className="label-text">Video Codec</span>
            </label>
            <select className="select select-bordered select-normal w-full max-w-xs">
              {videoCodecList.map((codec) => (
                <option key={codec.value} value={codec.value}>
                  {codec.label}
                </option>
              ))}
            </select>
            <label className="label">
              <span className="label-text">Audio Codec</span>
            </label>
            <select className="select select-bordered select-normal w-full max-w-xs">
              {audioCodecList.map((codec) => (
                <option key={codec.value} value={codec.value}>
                  {codec.label}
                </option>
              ))}
            </select>
            <label className="label">
              <span className="label-text">Audio Content</span>
            </label>
            <select className="select select-bordered select-normal w-full max-w-xs">
              {audioContentOptions.map((content) => (
                <option key={content.value} value={content.value}>
                  {content.label}
                </option>
              ))}
            </select>
            <label className="label">
              <span className="label-text">Video Resolution</span>
            </label>
            <select className="select select-bordered select-normal w-full max-w-xs">
              {videoResolutions.map((resolution) => (
                <option key={resolution.value} value={resolution.value}>
                  {resolution.label}
                </option>
              ))}
            </select>
            <label className="label">
              <span className="label-text">Video Frame Rate</span>
            </label>
            <select className="select select-bordered select-normal w-full max-w-xs">
              {videoFrameRates.map((frameRate) => (
                <option key={frameRate.value} value={frameRate.value}>
                  {frameRate.label}
                </option>
              ))}
            </select>
            <label className="label">
              <span className="label-text">Audio Sample Rate</span>
            </label>
            <select className="select select-bordered select-normal w-full max-w-xs">
              {audioSampleRates.map((sampleRate) => (
                <option key={sampleRate.value} value={sampleRate.value}>
                  {sampleRate.label}
                </option>
              ))}
            </select>
            <label className="label">
              <span className="label-text">Duration (seconds)</span>
            </label>
            <input
              type="number"
              min={1}
              placeholder="10"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="btn my-8">Generate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom;
