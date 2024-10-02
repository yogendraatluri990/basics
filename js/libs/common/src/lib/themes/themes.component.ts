import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'basics-themes-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.scss'
})
export class ThemesComponent {
  matchingStrings = signal<string[]>([]);
  private readonly _formBuilder = inject(FormBuilder);
  leetCodeGroup = this._formBuilder.group<{
    codes: string[]
  }>({
    codes: ['']
  });
  private readonly _stringFormatRegex = new RegExp(/['"]/g,);

  public extractMatchingString(): void {
    this.matchingStrings.update(() => []);
    const uniqueWords = new Set<string>();
    const words = (this.leetCodeGroup.controls.codes.value)!.replace(this._stringFormatRegex,'').trim().split(',');
    if (!words) return;

    console.log('current words', words);

    // for (const word of words) {
    //   for (let i = 0; i < word.length; i++) {
    //     if (words[i] === word) continue;
    //
    //     if (words[i]?.includes(word)) {
    //      uniqueWords.add(word);
    //     }
    //   }
    // }


    this.matchingStrings.update(() => [
      ...words.reduce((acc: string[], s) => {
        if (words.some((w) => w.length > s.length && w.indexOf(s) !== -1)) {
          acc.push(s);
        }
        return acc;
      }, [])
    ]);


  }

}
