const MusicTools = {
  standardPitch: 440,
  /**
   * Converts MIDI Pitch to the corresponding Frequency in Hertz (A440)
   * @param {number} midiPitch Pitch in MIDI Number
   * @returns {number} Frequency in Hertz
   * @example
   * midiPitchToFrequency(60)
   * //returns 261.3
   */
  midiPitchToFrequency: function (midiPitch) {
    return MusicTools.standardPitch * Math.pow(2, (midiPitch - 69) / 12);
  },
  /**
   * Converts a frequency in Hz to the corresponding MIDI pitch number.
   * @param {number} frequency - The frequency in Hz.
   * @returns {number} The MIDI pitch number.
   */
  frequencyToMidiPitch: function (frequency) {
    return 69 + 12 * Math.log2(frequency / MusicTools.standardPitch);
  },
  /**
   * Convert Linear Amplitude to Decibels (Full Scale)
   * @param {number} linAmp
   * @returns {number} dBFS
   */
  atodb: function (linAmp) {
    return 20 * Math.log10(linAmp);
  },
  /**
   * Convers dBFS to linear amplitdue
   * @param {number} dBFS
   * @returns {number} linear amplitude
   */
  dbtoa: function (dBFS) {
    return Math.pow(10, dBFS / 20);
  },
};

export default MusicTools;