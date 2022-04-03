import {Component, OnInit} from '@angular/core';
import {VoiceRecorder, RecordingData, GenericResponse} from 'capacitor-voice-recorder';



@Component({
  selector: 'app-footmenu',
  templateUrl: './footmenu.component.html',
  styleUrls: ['./footmenu.component.css']
})
export class FootmenuComponent implements OnInit {

  isrecording: boolean;
  mimitype : string;
  Base64Sound: string;
  constructor() {
    this.mimitype = '';
    this.Base64Sound = '';
    this.isrecording = false;
  }

  startrecording(): void {
    this.isrecording = true;
    VoiceRecorder.startRecording()
      .then((result: GenericResponse) => console.log(result.value))
      .catch(error => console.log(error))
  }

  stoprecording(): void {
    this.isrecording = false;
    VoiceRecorder.stopRecording()
      .then((result: RecordingData) => {
        this.mimitype = result.value.mimeType
        this.Base64Sound = result.value.recordDataBase64
        const ByteNumbers = new Array(this.Base64Sound.length)
        for (let i=0; i<this.Base64Sound.length;i++){
          ByteNumbers[i]= this.Base64Sound.charCodeAt(i)
        }
        const byteArray = new Uint8Array(ByteNumbers)
        const blob = new Blob([byteArray],{type:this.mimitype})
        let data = new FormData()
        data.append('file', blob ,'file')
        fetch('http://127.0.0.1:5000/predict',{
          method:'POST',
          body: data
        }).then(response => response.json()
        ).then(json => {
          console.log(json)
        });
      })
      .catch(error => console.log(error))
  }

  ngOnInit(): void {
    VoiceRecorder.canDeviceVoiceRecord().then((result: GenericResponse) => console.log(result.value))
    VoiceRecorder.requestAudioRecordingPermission().then((result: GenericResponse) => console.log(result.value))
    VoiceRecorder.hasAudioRecordingPermission().then((result: GenericResponse) => console.log(result.value))
  }

}
