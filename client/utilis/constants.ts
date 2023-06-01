export const videoContainerFormats = [
  {
    label: 'MP4',
    cmd_str: '-f mp4',
    value: 'mp4'
  },
  {
    label: 'MKV',
    cmd_str: '-f matroska',
    value: 'mkv'
  },
  {
    label: 'MOV',
    cmd_str: '-f mov',
    value: 'mov'
  },
  {
    label: 'AVI',
    cmd_str: '-f avi',
    value: 'avi'
  },
  {
    label: 'FLV',
    cmd_str: '-f flv',
    value: 'flv'
  },
  {
    label: 'WEBM',
    cmd_str: '-f webm',
    value: 'webm'
  },
  {
    label: 'TS',
    cmd_str: '-f mpegts',
    value: 'ts'
  },
  {
    label: 'OGV',
    cmd_str: '-f ogg',
    value: 'ogv'
  }
];

export const containerEncodingMap = {
  mp4: {
    videoCodecs: [
      {
        label: 'H.264',
        cmd_str: '-c:v libx264',
        value: 'libx264'
      },
      {
        label: 'H.265',
        cmd_str: '-c:v libx265',
        value: 'libx265'
      }
    ],
    audioCodecs: [
      {
        label: 'AAC',
        cmd_str: '-c:a aac',
        value: 'aac'
      },
      {
        label: 'MP3',
        cmd_str: '-c:a mp3',
        value: 'mp3'
      }
    ]
  },
  mkv: {
    videoCodecs: [
      {
        label: 'H.264',
        cmd_str: '-c:v libx264',
        value: 'libx264'
      },
      {
        label: 'VP9',
        cmd_str: '-c:v libvpx-vp9',
        value: 'libvpx-vp9'
      }
    ],
    audioCodecs: [
      {
        label: 'AAC',
        cmd_str: '-c:a aac',
        value: 'aac'
      },
      {
        label: 'Opus',
        cmd_str: '-c:a libopus',
        value: 'libopus'
      }
    ]
  },
  mov: {
    videoCodecs: [
      {
        label: 'H.264',
        cmd_str: '-c:v libx264',
        value: 'libx264'
      },
      {
        label: 'ProRes',
        cmd_str: '-c:v prores',
        value: 'prores'
      }
    ],
    audioCodecs: [
      {
        label: 'AAC',
        cmd_str: '-c:a aac',
        value: 'aac'
      },
      {
        label: 'PCM',
        cmd_str: '-c:a pcm_s16le',
        value: 'pcm_s16le'
      }
    ]
  },
  avi: {
    videoCodecs: [
      {
        label: 'Xvid',
        cmd_str: '-c:v libxvid',
        value: 'libxvid'
      },
      {
        label: 'DivX',
        cmd_str: '-c:v mpeg4',
        value: 'mpeg4'
      }
    ],
    audioCodecs: [
      {
        label: 'MP3',
        cmd_str: '-c:a mp3',
        value: 'mp3'
      },
      {
        label: 'AC3',
        cmd_str: '-c:a ac3',
        value: 'ac3'
      }
    ]
  },
  flv: {
    videoCodecs: [
      {
        label: 'H.264',
        cmd_str: '-c:v libx264',
        value: 'libx264'
      }
    ],
    audioCodecs: [
      {
        label: 'AAC',
        cmd_str: '-c:a aac',
        value: 'aac'
      }
    ]
  },
  webm: {
    videoCodecs: [
      {
        label: 'VP8',
        cmd_str: '-c:v libvpx',
        value: 'libvpx'
      },
      {
        label: 'VP9',
        cmd_str: '-c:v libvpx-vp9',
        value: 'libvpx-vp9'
      }
    ],
    audioCodecs: [
      {
        label: 'Vorbis',
        cmd_str: '-c:a libvorbis',
        value: 'libvorbis'
      },
      {
        label: 'Opus',
        cmd_str: '-c:a libopus',
        value: 'libopus'
      }
    ]
  },
  ts: {
    videoCodecs: [
      {
        label: 'MPEG-2',
        cmd_str: '-c:v mpeg2video',
        value: 'mpeg2video'
      },
      {
        label: 'H.264',
        cmd_str: '-c:v libx264',
        value: 'libx264'
      }
    ],
    audioCodecs: [
      {
        label: 'MPEG-2',
        cmd_str: '-c:a mp2',
        value: 'mp2'
      },
      {
        label: 'AAC',
        cmd_str: '-c:a aac',
        value: 'aac'
      }
    ]
  },
  ogv: {
    videoCodecs: [
      {
        label: 'Theora',
        cmd_str: '-c:v libtheora',
        value: 'libtheora'
      }
    ],
    audioCodecs: [
      {
        label: 'Vorbis',
        cmd_str: '-c:a libvorbis',
        value: 'libvorbis'
      }
    ]
  }
};


export const videoResolutions = [
  {
    label: 'Full HD (1080p - 1920x1080)',
    cmd_str: '-s 1920x1080',
    value: '1920x1080'
  },
  {
    label: 'HD (720p - 1280x720)',
    cmd_str: '-s 1280x720',
    value: '1280x720'
  },
  {
    label: '4K UHD (2160p - 3840x2160)',
    cmd_str: '-s 3840x2160',
    value: '3840x2160'
  },
  {
    label: '2K QHD (1440p - 2560x1440)',
    cmd_str: '-s 2560x1440',
    value: '2560x1440'
  },
  {
    label: 'FWVGA (854x480)',
    cmd_str: '-s 854x480',
    value: '854x480'
  },
  {
    label: 'VGA (640x480)',
    cmd_str: '-s 640x480',
    value: '640x480'
  },
  {
    label: 'WUXGA (1920x1200)',
    cmd_str: '-s 1920x1200',
    value: '1920x1200'
  },
  {
    label: 'WXGA (1280x800)',
    cmd_str: '-s 1280x800',
    value: '1280x800'
  },
  {
    label: 'XGA (1024x768)',
    cmd_str: '-s 1024x768',
    value: '1024x768'
  },
  {
    label: 'QVGA (320x240)',
    cmd_str: '-s 426x240',
    value: '426x240'
  }
];

export const videoFrameRates = [
  {
    label: '30fps',
    cmd_str: '-r 30',
    value: 30
  },
  {
    label: '24fps',
    cmd_str: '-r 24',
    value: 24
  },
  {
    label: '60fps',
    cmd_str: '-r 60',
    value: 60
  },
  {
    label: '120fps',
    cmd_str: '-r 120',
    value: 120
  }
];

export const audioContentOptions = {
  SINE: {
    label: 'Sine',
    cmd_str: '-f lavfi -i sine',
    value: 'sine'
  },
  NOISE: {
    label: 'Noise',
    cmd_str: '-f lavfi -i anoisesrc',
    value: 'anoisesrc'
  }
};

export const audioSampleRates = [
  {
    label: '44.1kHz',
    cmd_str: '-ar 44100',
    value: 44100
  },
  {
    label: '48kHz',
    cmd_str: '-ar 48000',
    value: 48000
  },
  {
    label: '96kHz',
    cmd_str: '-ar 96000',
    value: 96000
  }
];
